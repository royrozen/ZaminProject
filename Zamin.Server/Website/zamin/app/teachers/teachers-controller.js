(function() {
  'use strict';

  /**
   * @ngdoc object
   * @name teachers.controller:TeachersCtrl
   *
   * @description
   *
   */
  angular
    .module('teachers')
    .controller('TeachersCtrl', TeachersCtrl);

  function TeachersCtrl($scope, $timeout, $rootScope, consts, $mdDialog, Teachers) {
    $scope.currentTab = "posters";
    $scope.posters = [];
    $scope.lessonPlan = [];
    $scope.lessonPlanCarousel = undefined;
      $scope.userAuthenticated=false;

    $scope.selectTab = function(tab) {
      $scope.currentTab = tab;
      if (tab == 'lessonPlan' && $scope.lessonPlanCarousel == undefined) {
        //lessonPlan
        $timeout(function() {
          $scope.lessonPlanCarousel = $("#articles").slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            //  arrows: false,
            initialSlide: $scope.lessonPlan.length > 3 ? $scope.lessonPlan.length - 3 : 0,
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
          });
        }, 100);
      }
    }

    $scope.getTeachersData = function() {
      Teachers.getTeachersData().then(function(response) {
        if(response.data.userAuthenticated){
          $scope.userAuthenticated=true;
        }
        console.log(response);
        $scope.posters = response.data.posters;
        $scope.lessonPlan = response.data.lessonPlan;
        $timeout(function() {
          //posters
          $("#gallery").slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            //  arrows: false,
            initialSlide: $scope.posters.length > 3 ? $scope.posters.length - 3 : 0,
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
          });

        }, 100);
      });
    }


    $scope.downloadLessonPlanWritten = function(lessonPlanId) {
      var url = consts.serverUrl + 'Website/DownloadLessonPlanWritten?lessonPlanId=' + lessonPlanId;
      window.open(url, '_blank');
    }

    $scope.downloadLessonPlanPpt = function(lessonPlanId) {
      var url = consts.serverUrl + 'Website/DownloadLessonPlanPpt?lessonPlanId=' + lessonPlanId;
      window.open(url, '_blank');
    }

    $scope.openImageModal = function(imageUrl, ev) {
      $scope.currentImage = imageUrl;
      $mdDialog.show({
        targetEvent: ev,
        templateUrl: 'dialogs/imageDialog.html',
        scope: $scope,
        preserveScope: true,
        clickOutsideToClose: true
      });
    }


    //Likes
    $scope.likePoster = function(poster) {
      if ($rootScope.currentUser != undefined) {

        Teachers.likePoster(poster.Id).then(function(response) {
          if (response.data) poster.NumOfLikes++;
        });
      } else {
        $mdDialog.show({
          templateUrl: 'dialogs/loginDialog.html',
          scope: $scope,
          preserveScope: true,
          clickOutsideToClose: true
        });
      }

    }

    $scope.likePlan = function(plan) {
      if ($rootScope.currentUser != undefined) {
        Teachers.likePlan(plan.Id).then(function(response) {
          if (response.data) plan.NumOfLikes++;
        });
      } else {
        $mdDialog.show({
          templateUrl: 'dialogs/loginDialog.html',
          scope: $scope,
          preserveScope: true,
          clickOutsideToClose: true
        });
      }
    }

    $scope.getTeachersData();
  }
}());

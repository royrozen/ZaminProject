(function() {
  'use strict';

  /**
   * @ngdoc object
   * @name parents.controller:ParentsCtrl
   *
   * @description
   *
   */
  angular
    .module('parents')
    .controller('ParentsCtrl', ParentsCtrl);

  function ParentsCtrl($scope, $mdDialog,$rootScope, $sce, Parents) {
    $scope.categories = [];
    $scope.currentCategory = {};
    $scope.currentCourse = undefined;
    $scope.lessons = [];
    $scope.userAuthenticated=false;

    $scope.getParentsData = function() {
      showLoader();
      Parents.getParentsData().then(function(response) {
        if(response.data.userAuthenticated){
          $scope.userAuthenticated=true;
        }
        $scope.categories = response.data.categories;
        if ($scope.categories.length > 0) {
          $scope.selectCategory($scope.categories[0]);
        }
        hideLoader();
      });
    }

    $scope.selectCategory = function(cat) {
      $scope.currentCategory = cat;
      $scope.currentCourse = undefined;
    }

    $scope.selectCourse = function(course) {
      $scope.currentCourse = course;
      Parents.getCourseLessons(course.Id).then(function(response) {
        $scope.lessons = response.data;
      });
    }

    $scope.watchLesson = function(lesson, ev) {
      var url = lesson.VideoUrl.replace("watch?v=", "v/");
      $scope.currentIframe = $sce.trustAsResourceUrl(url);
      $scope.currentVideoUrl = url;
      $mdDialog.show({
        targetEvent: ev,
        templateUrl: 'dialogs/videoDialog.html',
        scope: $scope,
        preserveScope: true,
        clickOutsideToClose: true
      });
    }

    $scope.likeLesson = function(lesson) {
      if ($rootScope.currentUser != undefined) {

        Parents.likeLesson(lesson.Id).then(function(response) {
          if (response.data) lesson.NumOfLikes++;
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




    // //Likes
    // $scope.likeLesson = function(lesson){
    //   Parents.likeLesson(lesson.Id).then(function(response){
    //     if(response.data) lesson.NumOfLikes ++;
    //   });
    // }

    $scope.getParentsData();
  }
}());
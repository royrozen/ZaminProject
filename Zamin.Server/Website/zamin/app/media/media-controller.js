(function() {
  'use strict';

  /**
   * @ngdoc object
   * @name media.controller:MediaCtrl
   *
   * @description
   *
   */
  angular
    .module('media')
    .controller('MediaCtrl', MediaCtrl);

  function MediaCtrl($scope, $location ,$rootScope, $timeout, $sce, $mdDialog, consts, Media) {
    $scope.videos = [];
    $scope.articles = [];
    $scope.galleryImages = [];
    $scope.userAuthenticated=false;
    $scope.currentIframe = undefined;


    $scope.getMediaContent = function(ev) {
      showLoader();
      Media.getMediaContent().then(function(response) {
        hideLoader();
        console.log(response.data);
        if(response.data.userAuthenticated){
          $scope.userAuthenticated=true;
        }
        else if(!response.data.userAuthenticated && $rootScope.showedRegDialog==0) {
          $rootScope.showedRegDialog=1;
          $mdDialog.show({
          targetEvent: ev,
          templateUrl: 'dialogs/errorDialog.html',
          scope: $scope,
          preserveScope: true,
          clickOutsideToClose: true
        });
        }

        $scope.videos = response.data.videos;
        $scope.articles = response.data.articles;
        $scope.galleryImages = response.data.galleryImages;

        // $scope.videos.forEach(function(video) {
        //   var url = video.Url.replace("watch?v=", "v/");
        //   video.iframe = $sce.trustAsResourceUrl(url);
        //   video.id = video.Url.split("watch?v=")[1];
        // })
        $timeout(function() {

          //videos
          $("#videos").slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            //  arrows: false,
            initialSlide: $scope.videos.length > 3 ? $scope.videos.length - 3 : 0,
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
          });

          //articles
          $("#articles").slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            //  arrows: false,
            initialSlide: $scope.articles.length > 3 ? $scope.articles.length - 3 : 0,
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
          });

          //gallery
          $("#gallery").slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            //  arrows: false,
           initialSlide: $scope.galleryImages.length > 3 ? $scope.galleryImages.length - 3: 0,
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
          });

        }, 200);
      });


    };
    $scope.getArticles = function() {

      //TODO: Get from server

      $scope.videos.forEach(function(video) {
        var url = video.Url.replace("watch?v=", "v/");
        video.iframe = $sce.trustAsResourceUrl(url);
      })
      $timeout(function() {
        $("#articles").slick({
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: $scope.videos.length - 3,
          centerMode: true
        });
      }, 100);

    };

    $scope.openVideoModal = function(iframe, ev) {
      $scope.currentIframe = iframe;
      $mdDialog.show({
        targetEvent: ev,
        templateUrl: 'dialogs/videoDialog.html',
        scope: $scope,
        preserveScope: true,
        clickOutsideToClose: true
      });
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

    $scope.downloadArticle = function(articleId) {
      var url = consts.serverUrl + 'Website/GetArticleFile?articleId=' + articleId;
      window.open(url, '_blank');
    }



    $scope.getMediaContent();
  }
}());

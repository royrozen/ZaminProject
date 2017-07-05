(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name videoForm.controller:VideoFormCtrl
   *
   * @description
   *
   */
  angular
    .module('videoForm')
    .controller('VideoFormCtrl', VideoFormCtrl);

  function VideoFormCtrl($scope, $rootScope, $location, $mdDialog, $state, $stateParams,VideoForm,Tags) {
    $scope.tags = [];

      $scope.imageVersion = 1;
      $scope.video = {
        Tags: [],
        VideoTypeId : $stateParams.videotype
      };
      $scope.editMode = $state.current.name == 'videoFormUpdate';

      //---------------Get functions---------------------
      $scope.getVideo = function() {
        showLoader();
        VideoForm.getVideo($stateParams.videoId).then(function(response) {
          $scope.video = response.data;
          //$scope.video.VideoTypeId= $scope.video.VideoTypeId.toString();
          $scope.getTags();
          hideLoader();
        });
      }

      $scope.getTags = function() {
        showLoader();
        Tags.getAll().then(function(response) {
          $scope.tags = response.data;
          hideLoader();
        });
      }

      //---------------Post functions--------------------

      $scope.save = function(valid) {
        if (!valid) return;
        showLoader();
        VideoForm.save($scope.video).then(function(response) {
          hideLoader();
          if (response.data) {
            if($scope.video.VideoTypeId==0)
            $location.path("interesting-videos");
            else {
                $location.path("teen-videos");
            }
          }
        });
      }
      //Tags autocomplete
      $scope.searchText = "";
      $scope.selectedItem = undefined;

      $scope.transformChip = function(chip) {
        // If it is an object, it's already a known chip
        if (angular.isObject(chip)) {
          return chip;
        }

        // Otherwise, create a new one
        //    return { name: chip, type: 'new' }
      }

      $scope.querySearch = function(query) {
        var results = query ? $scope.tags.filter(createFilterFor(query)) : [];
        return results;
      }

      function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(tag) {
          return (tag.TagName.indexOf(lowercaseQuery) === 0) ||
            (tag.TagName.indexOf(lowercaseQuery) === 0);
        };
      }


      //Start
      if ($scope.editMode) $scope.getVideo();
        $scope.getTags();

    }
  }());

(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name galleryForm.controller:GalleryFormCtrl
   *
   * @description
   *
   */
  angular
    .module('galleryForm')
    .controller('GalleryFormCtrl', GalleryFormCtrl);

  function GalleryFormCtrl($scope, $location, $stateParams, $state, Tags, GalleryForm) {

    $scope.galleryImage = {
      Tags: []
    };


    $scope.tags = [];
    $scope.editMode = $state.current.name == 'galleryImageFormUpdate';

    $scope.save = function(valid) {
      if (!valid) return;
      showLoader();
      GalleryForm.save($scope.galleryImage).then(function(response) {
        hideLoader();
        if (response.data) {
          $location.path("gallery");
        }
      });
    }

    $scope.getGalleryImage = function() {
      showLoader();
      GalleryForm.getGalleryImage($stateParams.galleryImageId).then(function(response) {
        $scope.galleryImage = response.data;
        hideLoader();
        console.log($scope.galleryImage);
      });
    }



          $scope.getTags = function() {
            showLoader();
            Tags.getAll().then(function(response) {
              $scope.tags = response.data;
              hideLoader();
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
    if ($scope.editMode) $scope.getGalleryImage();
      $scope.getTags();

  }
}());

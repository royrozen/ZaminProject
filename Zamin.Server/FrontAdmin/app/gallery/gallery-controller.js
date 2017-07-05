(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name gallery.controller:GalleryCtrl
   *
   * @description
   *
   */
  angular
    .module('gallery')
    .controller('GalleryCtrl', GalleryCtrl);

  function GalleryCtrl($scope, $rootScope, $mdDialog,Gallery) {
    $scope.galleries = [];

      $scope.getAll = function() {
        showLoader();
        Gallery.getAll().then(function(response) {
          $scope.galleries = response.data;
          hideLoader();
        });
      }

      $scope.deleteDialog = function(itemToDelete, index, ev) {
        $scope.itemToDelete = itemToDelete;
        $scope.itemToDelete.index = index;
        $mdDialog.show({
          targetEvent: ev,
          templateUrl: 'deleteDialog.html',
          scope: $scope,
          preserveScope: true,
          clickOutsideToClose: true
        });
      }

      $scope.delete = function() {
        showLoader();
        Gallery.delete($scope.itemToDelete.Id).then(function(response) {
          if (response.data) {
            $scope.galleries.splice($scope.itemToDelete.index, 1);
            $scope.itemToDelete = {};
            $scope.hideDialog();
          }
          hideLoader();
        });
      }


     $scope.getAll();
    }
  }());

(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name teenVideos.controller:TeenVideosCtrl
   *
   * @description
   *
   */
  angular
    .module('teenVideos')
    .controller('TeenVideosCtrl', TeenVideosCtrl);

  function TeenVideosCtrl($scope, $rootScope, $mdDialog,TeenVideos) {
  $scope.teenVideos = [];
  $scope.itemToDelete = {};
    $scope.newVideo = undefined;

    //---------------Get functions---------------------
      $scope.getVideos = function() {
        showLoader();
        TeenVideos.getAll().then(function(response) {
          $scope.teenVideos = response.data;
          hideLoader();
        });
      }

      //---------------Post functions--------------------

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
            InterestingVideos.delete($scope.itemToDelete.Id).then(function(response) {
              if (response.data) {
                $scope.teenVideos.splice($scope.itemToDelete.index, 1);
                $scope.itemToDelete = {};
                $scope.hideDialog();
              }
              hideLoader();
            });
          }

          //---------------------- Other -----------------
          $scope.setEditMode = function(video) {
            video.edit = true;
          }



          //-----------------------Start------------------
          $scope.getVideos();
        }
      }());

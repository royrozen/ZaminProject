(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name interestingVideos.controller:InterestingVideosCtrl
   *
   * @description
   *
   */
  angular
    .module('interestingVideos')
    .controller('InterestingVideosCtrl', InterestingVideosCtrl);

  function InterestingVideosCtrl($scope, $rootScope, $mdDialog,VideoForm,InterestingVideos) {
  $scope.interestingVideos = [];
  $scope.itemToDelete = {};
    $scope.newVideo = undefined;

    //---------------Get functions---------------------
      $scope.getVideos = function() {
        showLoader();
        InterestingVideos.getAll().then(function(response) {
          $scope.interestingVideos = response.data;
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
                $scope.interestingVideos.splice($scope.itemToDelete.index, 1);
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
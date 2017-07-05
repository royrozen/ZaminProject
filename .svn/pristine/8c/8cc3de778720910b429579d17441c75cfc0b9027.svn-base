(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name activity.controller:ActivityCtrl
   *
   * @description
   *
   */
  angular
    .module('activity')
    .controller('ActivityCtrl', ActivityCtrl);

  function ActivityCtrl($scope, $rootScope, $mdDialog, Activity) {

    $scope.activities  = [];



      $scope.getAll = function() {
        showLoader();
        Activity.getAll().then(function(response) {
          $scope.activities  = response.data;



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
        Activity.delete($scope.itemToDelete.Id).then(function(response) {
          if (response.data) {
            $scope.activities .splice($scope.itemToDelete.index, 1);
            $scope.itemToDelete = {};
            $scope.hideDialog();
          }
          hideLoader();
        });
      }


     $scope.getAll();
    }
  }());

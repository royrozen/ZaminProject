(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name user.controller:UserCtrl
   *
   * @description
   *
   */
  angular
    .module('user')
    .controller('UserCtrl', UserCtrl);

  function UserCtrl($scope, $rootScope,$mdDialog,consts, User) {
    $scope.users = [];
    $scope.filter = {};


    $scope.getAllUsers = function(){
      showLoader();
      User.getAllUsers($rootScope.user.FranchiseId).then(function(response){
        $scope.users = response.data;
        hideLoader();
      });
    };

    $scope.getAppUsers = function() {
    showLoader();
    User.getAppUsers($scope.filter).then(function(response) {
      $scope.users = response.data.appUsers;
      hideLoader();
    })
  }
$scope.setclientEmail=function(email){
  $rootScope.userEmail=email;
}

$scope.exportWebUsersCsv = function() {
  window.open(consts.serverUrl + "WebsiteUser/ExportWebUsersCsv?name=" + $scope.filter.name + "&phone=" + $scope.filter.phone);
}

    $scope.clearFilter = function() {
        $scope.filter = {
          name: "",
          phone: ""
        };
        $scope.getAllUsers();
      }


    $scope.deleteDialog = function(itemToDelete, index, ev) {
      var temp =itemToDelete;
      temp.Name=itemToDelete.FirstName+" "+itemToDelete.LastName;
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
      User.delete($scope.itemToDelete.Id).then(function(response) {
        if (response.data) {
          $scope.users.splice($scope.itemToDelete.index, 1);
          $scope.itemToDelete = {};
          $scope.hideDialog();
        }
        hideLoader();
      });
    }

    // $scope.lock = function(isLock, id, user) {
    //   User.lock(id, isLock).then(function(response) {
    //     if(response.data){
    //       //user.IsUserLocked = isLock;
    //       user.IsLockedOut = isLock;
    //     }
    //   });
    // }
    $scope.getAllUsers();
    $scope.clearFilter();
  }
}());

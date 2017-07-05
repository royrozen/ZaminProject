(function() {
  'use strict';

  /**
   * @ngdoc object
   * @name zaminSystemAdmin.controller:AppCtrl
   *
   * @description
   *
   */
  angular
    .module('zamin')
    .controller('AppCtrl', AppCtrl);

  function AppCtrl($scope, $rootScope, $location, $mdDialog, Login) {
    $scope.setItemInLocalStorage = function(key, value) {
      var str = JSON.stringify(value);
      localStorage.setItem(key, str);
    };

    $scope.getItemFromLocalStorage = function(key) {
      var str = localStorage.getItem(key);
      if (str) return JSON.parse(str);
      else return undefined;
    };

      $rootScope.user = {};
      $rootScope.userEmail="";
      $scope.currentLocation = "";
      $rootScope.courseName="";

      $scope.defaultFilePic="https://img.clipartfest.com/0364c1755f5820905faef27fc22e19c4_text-file-icon-free-vector-text-file-clipart_800-800.png";

$scope.logOff =function(){
  Login.logOff().then(function(response){
      $location.path("login")
  })
}

    $scope.hideDialog = function() {
      $mdDialog.hide();
    }


    $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams) {
        $scope.currentLocation = toState.name;
      })


    $scope.getCurrentUser = function() {
      Login.getCurrentUser().then(function(response) {
        if (response.data == false) {
          $location.path("login")
        } else {
          $rootScope.user.Id = response.data.Id;
          $rootScope.user.Username = response.data.Username;
          //TODO delete the HC FranchiseId
          // $rootScope.user.FranchiseId = 1;
        }
      });

    }


    //Start
    // $scope.getCurrentUser();

  }
}());

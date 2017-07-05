(function() {
  'use strict';

  /**
   * @ngdoc object
   * @name zamin.controller:AppCtrl
   *
   * @description
   *
   */
  angular
    .module('zamin')
    .controller('AppCtrl', AppCtrl);

  function AppCtrl($scope, $location, $rootScope, $stateParams, $mdDialog, Login) {
    $scope.contactUs = {
      name: '',
      email: ''
    };

    $scope.currentLocation = "";
    $rootScope.currentUser = undefined;

    $rootScope.showedRegDialog=0;

    $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams) {
        $scope.currentLocation = toState.name;
      });
    //--------------------------------------login functions-----------------------------------------------
    // $scope.login = function() {
    //   if ($scope.email === "" || $scope.password === "") {
    //     return;
    //   }
    //   showLoader();
    //   Login.login($scope.email, $scope.password).then(function(response) {
    //     $("#login-modal").modal("hide");
    //     $scope.logedIn = response.success;
    //     $scope.userName = response.userName;
    //     if (!$scope.logedIn) {
    //       $scope.showInvalidUserNameMessage = true;
    //       $scope.password = "";
    //     } else {
    //       $rootScope.$broadcast("userLogedIn", $scope.userName);
    //       $location.path("account");
    //     }
    //     hideLoader();
    //
    //   });
    // }



    $scope.getCurrentUser = function() {
      if (localStorage.getItem("loginToken") != undefined) {
        Login.getCurrentUser(localStorage.getItem("loginToken")).then(function(response) {
          $rootScope.currentUser = response.data;
        });
      }
    }


    //----------------------------------------------------------------------------------------------------------------

    $scope.contactUsRequest = function() {
      $scope.contactUsFormSubmitted = true;
      if ($scope.contactUs.name === '' || $scope.contactUs.email === '') {
        return;
      }
      userService.contactUsRequest($scope.contactUs).then(function(response) {
        if (response === "true") {
          $scope.contactUsThanks = true;
        }
      });
    }


    $scope.loginDialog = function() {
      $scope.loginFailed = false;
      $mdDialog.show({
        templateUrl: 'dialogs/loginDialog.html',
        scope: $scope,
        preserveScope: true,
        clickOutsideToClose: true
      });
    }

    $scope.login = function(email, password) {
      if (email === "" ||password === "") {
          return;
        }
      showLoader();
      Login.login(email, password).then(function(response) {
        if (response.data.success) {
          localStorage.setItem("loginToken", response.data.user.LoginToken);
          $rootScope.currentUser = response.data.user;
          $scope.loginFailed = false;
          $scope.hideDialog();
          $location.path("home");
        }else{
          $scope.loginFailed = true;
        }
        hideLoader();
      });
    }

    $scope.logOut = function() {
      window.location.href = "#";
      $rootScope.currentUser = undefined;
      localStorage.clear();
    }

    $scope.goTo = function(url) {
      $location.path(url);
    }

    $scope.hideDialog = function() {
      $mdDialog.hide();
    }
$scope.getCurrentUser();
  }
}());

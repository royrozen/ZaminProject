(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name userForm.controller:UserFormCtrl
   *
   * @description
   *
   */
  angular
    .module('userForm')
    .controller('UserFormCtrl', UserFormCtrl);

  function UserFormCtrl($scope,$mdDialog,$rootScope,$location,$stateParams, $state, UserForm) {

    $scope.user = {};
    $scope.branches = [];
    $scope.editMode = $state.current.name == 'userFormUpdate'
    $scope.errorMassage="";


    $scope.getUser = function(){
      showLoader();
      UserForm.getUser($stateParams.userId).then(function(response){
        if(response.data)
          $scope.user = response.data;
          $scope.user.Password="";
          $scope.user.BirthdayDate= $scope.user.BirthdayDate.split(" ")[0];
      });
      hideLoader();
    };

    $scope.save = function(ev){

            $scope.emailExists = false;
            // $scope.businessNumberExists = false;
            $scope.passwordTooShort = false;
            $scope.wrongPassword = false;
            if ($scope.user.FirstName == undefined || $scope.user.LastName == undefined || $scope.user.Email == undefined || $scope.user.Password == undefined || $scope.user.Phone == undefined) {
              return;
            }
      

      if(  $scope.user.Password=="" ){
        $scope.errorMassage = "יש ליצור סיסמא חדשה עבור המשתמש";
        $mdDialog.show({
          targetEvent: ev,
          templateUrl: 'errorDialog.html',
          scope: $scope,
          preserveScope: true,
          clickOutsideToClose: true
        });
        return;
      }
      showLoader();
            if ($scope.editMode) {
        UserForm.update($scope.user).then(function(response) {
          if (response.data) {
            $location.path("user");
            hideLoader();
          }else{
              hideLoader();
            $scope.errorMassage="שגיאה";
            $mdDialog.show({
              templateUrl: 'errorDialog.html',
              scope: $scope,
              preserveScope: true,
              clickOutsideToClose: true
            });
            return;
          }
        });
      } else {
        UserForm.create($scope.user).then(function(response) {
          if (response.data) {
            $location.path("user");
            hideLoader();
          }else{
              hideLoader();
          $scope.errorMassage="שגיאה";
            $mdDialog.show({
              templateUrl: 'errorDialog.html',
              scope: $scope,
              preserveScope: true,
              clickOutsideToClose: true
            });
            return;
          }
        });
      }
    };

    $scope.roleChange = function(role){
      if(role == "franchise" && $scope.user.IsFranchiseAdmin){
        $scope.user.IsBranchAdmin = false;
      }
      else if(role == 'branch' && $scope.user.IsBranchAdmin) {
        $scope.user.IsFranchiseAdmin = false;
      }

    }

    if($scope.editMode) $scope.getUser();
  }
}());

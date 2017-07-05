(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name login.factory:Login
   *
   * @description
   *
   */
  angular
    .module('login')
    .factory('Login', Login);

  function Login($http, consts) {
    var LoginBase = {};
    LoginBase.login = function (email, password) {
      return $http({
        method: "POST",
        url: consts.serverUrl + "Account/WebsiteLogin",
        data: {userName: email, password: password}
      });
    };

    LoginBase.getCurrentUser = function(loginToken){
      return $http({
        method: "GET",
        url: consts.serverUrl + "Account/GetCurrentUserByLoginToken",
        params: {loginToken: loginToken}
      });
    }

    return LoginBase;
  }
}());

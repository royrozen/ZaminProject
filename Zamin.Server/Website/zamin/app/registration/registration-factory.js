(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name registration.factory:Registration
   *
   * @description
   *
   */
  angular
    .module('registration')
    .factory('Registration', Registration);

  function Registration($http, $rootScope, consts) {
    var RegistrationBase = {};


    RegistrationBase.signUp = function(signupInfo) {
      return $http({
        method: "POST",
        url: consts.serverUrl + 'Account/SignUp',
        data: {
websiteUser: signupInfo
        }
      });

    };

    RegistrationBase.getTags = function() {
      return $http({
        method: "GET",
        url: consts.serverUrl + "Tag/GetTags"
      });
    };

    return RegistrationBase;
  }
}());
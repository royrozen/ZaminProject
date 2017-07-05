(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name user.factory:User
   *
   * @description
   *
   */
  angular
    .module('user')
    .factory('User', User);

  function User($http, consts) {
    var UserBase = {};

    UserBase.getAllUsers = function() {
      return $http({
        method: "GET",
        url: consts.serverUrl + "WebsiteUser/GetAllWebsiteUsers",
      });
    };

    UserBase.getAppUsers = function(filter) {
      return $http({
        method: "POST",
        url: consts.serverUrl + "WebsiteUser/GetAppUsersByFilter",
        data: {
        filter: filter
      }
      });
    };



    UserBase.delete = function(userId) {
      return $http({
        method: "POST",
        url: consts.serverUrl + "WebsiteUser/DeleteWebSiteUser",
        data: {
          websiteUserId: userId
        }
      });
    };

    UserBase.lock = function(userId, isLock) {
      return $http({
        method: "POST",
        url: consts.serverUrl + "User/LockUser",
        data: {
          id: userId,
          isLock: isLock
        }
      });
    };
    return UserBase;
  }
}());

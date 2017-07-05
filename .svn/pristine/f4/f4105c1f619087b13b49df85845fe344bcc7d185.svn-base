(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name userForm.factory:UserForm
   *
   * @description
   *
   */
  angular
    .module('userForm')
    .factory('UserForm', UserForm);

  function UserForm($http, consts) {
    var UserFormBase = {};

    UserFormBase.getUser = function (userId) {
      return $http({
        method: "GET",
        url: consts.serverUrl + "WebSiteUser/GetWebSiteUser",
        params:{
          userId : userId
        }
      });
    };

    UserFormBase.create = function (user) {
      return $http({
        method: "POST",
        url: consts.serverUrl + "WebSiteUser/SaveWebSiteUser",
        data:{
          websiteUser : user
        }
      });
    };


    UserFormBase.update = function (user) {
      return $http({
        method: "POST",
        url: consts.serverUrl + "WebSiteUser/SaveWebSiteUser",
        data:{
          websiteUser : user
        }
      });
    };


    UserFormBase.delete = function(userId){
      return $http({
        method : "POST",
        url : consts.serverUrl + "WebSiteUser/Delete",
        data:{
          userId:userId
        }
      });
    };


    return UserFormBase;
  }
}());

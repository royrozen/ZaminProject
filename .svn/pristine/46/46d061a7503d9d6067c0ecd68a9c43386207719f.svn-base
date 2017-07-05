(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name guide.factory:Guide
   *
   * @description
   *
   */
  angular
    .module('guide')
    .factory('Guide', Guide);

  function Guide($http,consts) {
    var GuideBase = {};
    GuideBase.someValue = 'Guide';
    GuideBase.getGuidesData = function () {
      return $http({
        method: "GET",
        url: consts.serverUrl + "Website/GetGuidesData",
        params: {loginToken: localStorage.getItem("loginToken")}
      });
    };

    GuideBase.likeActivity = function(activityId){
      return $http({
        method: "GET",
        url: consts.serverUrl + "Website/LikeActivity",
        params: {activityId:activityId, loginToken: localStorage.getItem("loginToken")}
      });
    }



    return GuideBase;
  }
}());

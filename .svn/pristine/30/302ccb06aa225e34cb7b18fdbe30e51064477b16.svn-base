(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name media.factory:Media
   *
   * @description
   *
   */
  angular
    .module('media')
    .factory('Media', Media);

  function Media($http,consts) {
    var MediaBase = {};

    MediaBase.getMediaContent = function () {
      return $http({
        method: "GET",
        url: consts.serverUrl + "Website/GetContentPageData",
        params: {loginToken: localStorage.getItem("loginToken")}
      });
    };
    return MediaBase;
  }
}());

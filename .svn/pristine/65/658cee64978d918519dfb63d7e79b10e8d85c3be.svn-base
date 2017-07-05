(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name teenVideos.factory:TeenVideos
   *
   * @description
   *
   */
  angular
    .module('teenVideos')
    .factory('TeenVideos', TeenVideos);

  function TeenVideos($http,consts) {
    var TeenVideosBase = {};

    TeenVideosBase.getAll = function() {
        return $http({
          method: "GET",
          url: consts.serverUrl + "Video/GetVideos",
          params:{
            Videotype:1
          }

        });
      };


      TeenVideosBase.delete = function(videoId) {
        return $http({
          method: "POST",
          url: consts.serverUrl + "video/DeleteVideo",
          data: {videoId:videoId}
        });
      };
    return TeenVideosBase;
  }
}());

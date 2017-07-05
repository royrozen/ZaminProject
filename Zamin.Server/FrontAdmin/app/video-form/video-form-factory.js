(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name videoForm.factory:VideoForm
   *
   * @description
   *
   */
  angular
    .module('videoForm')
    .factory('VideoForm', VideoForm);

  function VideoForm($http,consts) {
    var VideoFormBase = {};

    VideoFormBase.getVideo = function (videoId){
          return $http({
          method: "GET",
          url: consts.serverUrl + "Video/GetVideo",
          params: {
            videoId: videoId
          }
        });
      };


      VideoFormBase.save = function(video) {
        var fd = new FormData();
        fd.append("Id", video.Id);
        fd.append("Name", video.Name);
        if (video.Description != undefined) fd.append("Description", video.Description);
        if (video.Url != undefined) fd.append("Url", video.Url);
        if (video.VideoTypeId == 0) {
          fd.append("VideoTypeId", 0);
        }
        else{fd.append("VideoTypeId", 1);}
        if (video.IsAuthorizedContent != undefined) fd.append("IsAuthorizedContent", video.IsAuthorizedContent);

        video.Tags.forEach(function(tag, index) {
          fd.append("Tags[" + index + "].Id", tag.Id);
          fd.append("Tags[" + index + "].TagName", tag.TagName);
        });

        return $http({
          method: "POST",
          url: consts.serverUrl + "Video/SaveVideo",
          data: fd,
          headers: {
            'Content-Type': undefined
          },
          transformRequest: angular.identity
        });
      };

    return VideoFormBase;
  }
}());
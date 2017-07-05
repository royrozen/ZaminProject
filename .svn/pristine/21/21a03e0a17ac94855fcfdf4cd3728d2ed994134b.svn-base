(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name activityForm.factory:ActivityForm
   *
   * @description
   *
   */
  angular
    .module('activityForm')
    .factory('ActivityForm', ActivityForm);

  function ActivityForm($http,consts) {
    var ActivityFormBase = {};

    ActivityFormBase.getActivity = function(activityId) {
      return $http({
        method: "GET",
        url: consts.serverUrl + "Activity/GetActivity",
        params: {
          activityId: activityId
        }
      });
    };

    ActivityFormBase.save = function(activity) {
      var fd = new FormData();
      fd.append("Id", activity.Id);
      fd.append("Name", activity.Name);
      if (activity.Description != undefined) fd.append("Description", activity.Description);
        if (activity.File != undefined) fd.append("File", activity.File);
      if (activity.IsAuthorizedContent != undefined) fd.append("IsAuthorizedContent", activity.IsAuthorizedContent);

      activity.Tags.forEach(function(tag, index) {
        fd.append("Tags[" + index + "].Id", tag.Id);
        fd.append("Tags[" + index + "].TagName", tag.TagName);
      });

      return $http({
        method: "POST",
        url: consts.serverUrl + "Activity/SaveActivity",
        data: fd,
        headers: {
          'Content-Type': undefined
        },
        transformRequest: angular.identity
      });
    };



    ActivityFormBase.getTags = function() {
      return $http({
        method: "GET",
        url: consts.serverUrl + "Tag/GetTags"
      });
    }
    return ActivityFormBase;
  }
}());

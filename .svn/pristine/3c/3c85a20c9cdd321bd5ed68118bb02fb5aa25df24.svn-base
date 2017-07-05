(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name activity.factory:Activity
   *
   * @description
   *
   */
  angular
    .module('activity')
    .factory('Activity', Activity);

  function Activity($http,consts) {
    var ActivityBase = {};

    ActivityBase.getAll = function () {
        return $http({
          method: "GET",
          url: consts.serverUrl + "Activity/GetActivities",
        });
      };


      ActivityBase.delete = function(activityId) {
        return $http({
          method: "POST",
          url: consts.serverUrl + "Activity/DeleteActivity",
          data: {
            activityId: activityId
          }
        });
      };

    return ActivityBase;
  }
}());

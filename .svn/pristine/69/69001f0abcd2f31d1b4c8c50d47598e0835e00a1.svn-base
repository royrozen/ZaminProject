(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name teachers.factory:Teachers
   *
   * @description
   *
   */
  angular
    .module('teachers')
    .factory('Teachers', Teachers);

  function Teachers($http, consts) {
    var TeachersBase = {};
    TeachersBase.someValue = 'Teachers';
    TeachersBase.getTeachersData = function () {
      return $http({
        method: "GET",
        url: consts.serverUrl + "Website/GetTeachersData",
        params: {loginToken: localStorage.getItem("loginToken")}
      });
    };


    TeachersBase.likePoster = function(posterId){
      return $http({
        method: "GET",
        url: consts.serverUrl + "Website/LikePoster",
        params: {posterId:posterId, loginToken: localStorage.getItem("loginToken")}
      });
    }

    TeachersBase.likePlan = function(lessonPlanId){
      return $http({
        method: "GET",
        url: consts.serverUrl + "Website/LikeLessonPlan",
        params: {lessonPlanId:lessonPlanId, loginToken: localStorage.getItem("loginToken")}
      });
    }


    return TeachersBase;
  }
}());

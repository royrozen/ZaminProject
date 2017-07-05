(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name lessonForm.factory:LessonForm
   *
   * @description
   *
   */
  angular
    .module('lessonForm')
    .factory('LessonForm', LessonForm);

  function LessonForm($http,consts) {
    var LessonFormBase = {};


        LessonFormBase.getLesson = function (lessonId){
              return $http({
              method: "GET",
              url: consts.serverUrl + "Lesson/GetLesson",
              params: {
                lessonId: lessonId
              }
            });
          };


          LessonFormBase.save = function(lesson) {
            var fd = new FormData();
            fd.append("Id", lesson.Id);
            fd.append("Name", lesson.Name);
            fd.append("CourseId", lesson.CourseId);
            if (lesson.Description != undefined) fd.append("Description", lesson.Description);
            if (lesson.VideoUrl != undefined) fd.append("VideoUrl", lesson.VideoUrl);
            if (lesson.IsAuthorizedContent != undefined) fd.append("IsAuthorizedContent", lesson.IsAuthorizedContent);

            lesson.Tags.forEach(function(tag, index) {
              fd.append("Tags[" + index + "].Id", tag.Id);
              fd.append("Tags[" + index + "].TagName", tag.TagName);
            });

            return $http({
              method: "POST",
              url: consts.serverUrl + "Lesson/SaveLesson",
              data: fd,
              headers: {
                'Content-Type': undefined
              },
              transformRequest: angular.identity
            });
          };


    return LessonFormBase;
  }
}());

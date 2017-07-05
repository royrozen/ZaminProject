(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name lesson.factory:Lesson
   *
   * @description
   *
   */
  angular
    .module('lesson')
    .factory('Lesson', Lesson);

  function Lesson($http,consts) {
    var LessonBase = {};

    LessonBase.getAll = function() {
        return $http({
          method: "GET",
          url: consts.serverUrl + "Lesson/GetLessons",

        });
      };

      LessonBase.getLessonsByCourseId = function(courseId) {
        return $http({
          method: "GET",
          url: consts.serverUrl + "Lesson/GetLessonsByCourseId",
          params: {
            courseId: courseId
          }
        });
      };


      LessonBase.create = function(lesson) {

        var fd = new FormData();
        fd.append("Name", lesson.Name);
        fd.append("Description", lesson.Description);
        fd.append("ImageFile", lesson.ImageFile);
        fd.append("IsAuthorizedContent", lesson.IsAuthorizedContent);
        lesson.tags.forEach(function(top, index) {
          fd.append("Tags[" + index + "].TagId", tag.TagId);
        });
        return $http({
          method: "POST",
          url: consts.serverUrl + "Lesson/CreateLesson",
          data: fd,
          headers: {
            'Content-Type': undefined
          },
          transformRequest: angular.identity
        });
      };


      LessonBase.update = function(lesson) {
        var fd = new FormData();
        fd.append("Id", lesson.Id);
        fd.append("Name", lesson.Name);
        fd.append("Description", lesson.Description);
        fd.append("ImageFile", lesson.ImageFile);
        fd.append("IsAuthorizedContent", lesson.IsAuthorizedContent);

        lesson.tags.forEach(function(top, index) {
          if (top.Id != undefined) fd.append("Tags[" + index + "].Id", tag.TagId);
          fd.append("Tags[" + index + "].TagId",tag.TagId);
        });

        return $http({
          method: "POST",
          url: consts.serverUrl + "Lesson/UpdateLesson",
          data: fd,
          headers: {
            'Content-Type': undefined
          },
          transformRequest: angular.identity
        });
      };


      LessonBase.delete = function(lessonId) {
        return $http({
          method: "POST",
          url: consts.serverUrl + "Lesson/DeleteLesson",
          data:
           {
             lessonId:lessonId
           }
        });
      };


    return LessonBase;
  }
}());

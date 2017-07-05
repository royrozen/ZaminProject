(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name courses.factory:Courses
   *
   * @description
   *
   */
  angular
    .module('courses')
    .factory('Courses', Courses);

  function Courses() {
    var CoursesBase = {};
    CoursesBase.someValue = 'Courses';
    CoursesBase.someMethod = function () {
      return 'Courses';
    };
    return CoursesBase;
  }
}());

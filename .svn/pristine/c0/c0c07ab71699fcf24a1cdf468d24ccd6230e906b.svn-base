(function() {
  'use strict';

  angular
    .module('lessonForm')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('lessonForm', {
        url: '/lesson-form/:courseId',
        views: {
          'mainView': {
            templateUrl: 'lesson-form/lesson-form.tpl.html',
            controller: 'LessonFormCtrl',
            controllerAs: 'lessonForm'
          },
          'layoutView': {
            templateUrl: 'partials/layoutView.html'
          }
        }
      })
      .state('lessonFormUpdate', {
        url: '/lesson-form/:lessonId/:courseId',
        views: {
          'mainView': {
            templateUrl: 'lesson-form/lesson-form.tpl.html',
            controller: 'LessonFormCtrl',
            controllerAs: 'lessonForm'
          },
          'layoutView': {
            templateUrl: 'partials/layoutView.html'
          }
        }
      });
  }
}());

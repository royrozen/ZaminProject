(function() {
  'use strict';

  angular
    .module('lesson')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('lesson', {
        url: '/lesson/:courseId/:courseName',
        views: {
          'mainView': {
            templateUrl: 'lesson/lesson.tpl.html',
            controller: 'LessonCtrl',
            controllerAs: 'lesson'
          },
          'layoutView': {
            templateUrl: 'partials/layoutView.html'
          }
        }
      });
  }
}());

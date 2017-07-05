(function () {
  'use strict';

  angular
    .module('teachers')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('teachers', {
        url: '/teachers',
        templateUrl: 'teachers/teachers.tpl.html',
        controller: 'TeachersCtrl',
        controllerAs: 'teachers'
      });
  }
}());

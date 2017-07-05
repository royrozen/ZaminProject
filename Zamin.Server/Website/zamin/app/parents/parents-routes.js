(function () {
  'use strict';

  angular
    .module('parents')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('parents', {
        url: '/parents',
        templateUrl: 'parents/parents.tpl.html',
        controller: 'ParentsCtrl',
        controllerAs: 'parents'
      });
  }
}());

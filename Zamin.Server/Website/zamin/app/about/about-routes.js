(function () {
  'use strict';

  angular
    .module('about')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'about/about.tpl.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
  }
}());

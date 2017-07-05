(function () {
  'use strict';

  angular
    .module('activity')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('activity', {
        url: '/activity',
        views: {
        'mainView': {
          templateUrl: 'activity/activity.tpl.html',
          controller: 'ActivityCtrl',
          controllerAs: 'activity'
        },
        'layoutView': {
          templateUrl: 'partials/layoutView.html'
        }
      }
      });
      }
      }());

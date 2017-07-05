(function () {
  'use strict';

  angular
    .module('activityForm')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('activityForm', {
        url: '/activity-form',
        views: {
          'mainView': {
            templateUrl: 'activity-form/activity-form.tpl.html',
            controller: 'ActivityFormCtrl',
            controllerAs: 'activityForm'
          },
          'layoutView': {
            templateUrl: 'partials/layoutView.html'
          }
        }
      })
      .state('activityFormUpdate', {
        url: '/activity-form/:activityId',
        views: {
          'mainView': {
            templateUrl: 'activity-form/activity-form.tpl.html',
            controller: 'ActivityFormCtrl',
            controllerAs: 'activityForm'
          },
          'layoutView': {
            templateUrl: 'partials/layoutView.html'
          }
        }
      });
      }
      }());

(function () {
  'use strict';

  angular
    .module('articleForm')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('articleForm', {
        url: '/article-form',
        views: {
          'mainView': {
            templateUrl: 'article-form/article-form.tpl.html',
            controller: 'ArticleFormCtrl',
            controllerAs: 'articleForm'
          },
          'layoutView': {
            templateUrl: 'partials/layoutView.html'
          }
        }
      })
      .state('articleFormUpdate', {
        url: '/article-form/:articleId',
        views: {
          'mainView': {
            templateUrl: 'article-form/article-form.tpl.html',
            controller: 'ArticleFormCtrl',
            controllerAs: 'articleForm'
          },
          'layoutView': {
            templateUrl: 'partials/layoutView.html'
          }
        }
      });
      }
      }());

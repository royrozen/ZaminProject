(function () {
  'use strict';

  angular
    .module('article')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('article', {
        url: '/article',
        views: {
        'mainView': {
          templateUrl: 'article/article.tpl.html',
          controller: 'ArticleCtrl',
          controllerAs: 'article'
        },
        'layoutView': {
          templateUrl: 'partials/layoutView.html'
        }
      }
    });
    }
    }());

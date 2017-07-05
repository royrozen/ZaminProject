(function () {
  'use strict';

  angular
    .module('galleryForm')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('galleryForm', {
        url: '/gallery-form',
        views: {
          'mainView': {
            templateUrl: 'gallery-form/gallery-form.tpl.html',
            controller: 'GalleryFormCtrl',
            controllerAs: 'galleryForm'
          },
          'layoutView': {
            templateUrl: 'partials/layoutView.html'
          }
        }
      })
      .state('galleryImageFormUpdate', {
        url: '/gallery-form/:galleryImageId',
        views: {
          'mainView': {
            templateUrl: 'gallery-form/gallery-form.tpl.html',
            controller: 'GalleryFormCtrl',
            controllerAs: 'galleryForm'
          },
          'layoutView': {
            templateUrl: 'partials/layoutView.html'
          }
        }
      });
    }
    }());

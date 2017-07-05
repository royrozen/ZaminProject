(function() {
  'use strict';

  angular
    .module('gallery')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('gallery', {
        url: '/gallery',
        views: {
          'mainView': {
            templateUrl: 'gallery/gallery.tpl.html',
            controller: 'GalleryCtrl',
            controllerAs: 'gallery'
          },
          'layoutView': {
            templateUrl: 'partials/layoutView.html'
          }
        }
      });
  }
}());

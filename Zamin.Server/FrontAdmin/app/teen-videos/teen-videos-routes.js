(function() {
  'use strict';

  angular
    .module('teenVideos')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('teenVideos', {
        url: '/teen-videos',
        views: {
          'mainView': {
            templateUrl: 'teen-videos/teen-videos.tpl.html',
            controller: 'TeenVideosCtrl',
            controllerAs: 'teenVideos'
          },
          'layoutView': {
            templateUrl: 'partials/layoutView.html'
          }
        }
      });
  }
}());

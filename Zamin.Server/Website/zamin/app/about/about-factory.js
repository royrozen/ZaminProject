(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name about.factory:About
   *
   * @description
   *
   */
  angular
    .module('about')
    .factory('About', About);

  function About() {
    var AboutBase = {};
    AboutBase.someValue = 'About';
    AboutBase.someMethod = function () {
      return 'About';
    };
    return AboutBase;
  }
}());

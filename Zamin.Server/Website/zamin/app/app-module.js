(function () {
  'use strict';

  /* @ngdoc object
   * @name zamin
   * @description
   *
   */
  angular
    .module('zamin', [
      'ngAria',
      'ngMaterial',
      'mdPickers',
      'ui.router',
      'vAccordion',
      'home',
      'media',
      'courses',
      'registration',
      'about',
      'login',
      'parents',
      'teachers',
      'guide',
      'ngYoutubeEmbed'
    ])
    .constant("consts", {
      serverUrl: 'http://zamin/'
       //serverUrl: 'http://zamin.muze.co.il/'
    })
}());

var showLoader = function(){
  $("#loader").show();
}

var hideLoader = function(){
  $("#loader").hide();
}

var imgError = function (image) { //Hide image if notFound
    image.style.display = 'none';
}

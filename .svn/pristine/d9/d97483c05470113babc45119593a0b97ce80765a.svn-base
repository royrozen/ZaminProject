(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name gallery.factory:Gallery
   *
   * @description
   *
   */
  angular
    .module('gallery')
    .factory('Gallery', Gallery);

  function Gallery($http,consts) {
    var GalleryBase = {};

    GalleryBase.getAll = function () {
        return $http({
          method: "GET",
          url: consts.serverUrl + "GalleryImage/GetGalleryImages",
        });
      };


      GalleryBase.delete = function(galleryImageId) {
        return $http({
          method: "POST",
          url: consts.serverUrl + "GalleryImage/DeleteGalleryImage",
          data: {
            galleryImageId: galleryImageId
          }
        });
      };

    return GalleryBase;
  }
}());

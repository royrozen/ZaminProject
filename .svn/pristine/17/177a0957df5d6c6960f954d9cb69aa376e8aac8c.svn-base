(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name galleryForm.factory:GalleryForm
   *
   * @description
   *
   */
  angular
    .module('galleryForm')
    .factory('GalleryForm', GalleryForm);

  function GalleryForm($http ,consts) {
    var GalleryFormBase = {};

            GalleryFormBase.getGalleryImage = function(galleryImageId) {
              return $http({
                method: "GET",
                url: consts.serverUrl + "GalleryImage/GetGalleryImage",
                params: {
                  galleryImageId: galleryImageId
                }
              });
            };

            GalleryFormBase.save = function(galleryImage) {
              var fd = new FormData();
              fd.append("Id", galleryImage.Id);
              fd.append("Name", galleryImage.Name);
              if (galleryImage.ImageFile != undefined) fd.append("ImageFile", galleryImage.ImageFile);
              if (galleryImage.IsAuthorizedContent != undefined) fd.append("IsAuthorizedContent", galleryImage.IsAuthorizedContent);

              galleryImage.Tags.forEach(function(tag, index) {
                fd.append("Tags[" + index + "].Id", tag.Id);
                fd.append("Tags[" + index + "].TagName", tag.TagName);
              });

              return $http({
                method: "POST",
                url: consts.serverUrl + "GalleryImage/SaveGalleryImage",
                data: fd,
                headers: {
                  'Content-Type': undefined
                },
                transformRequest: angular.identity
              });
            };

            GalleryFormBase.getTags = function() {
              return $http({
                method: "GET",
                url: consts.serverUrl + "Tag/GetTags"
              });
            }
    return GalleryFormBase;
  }
}());

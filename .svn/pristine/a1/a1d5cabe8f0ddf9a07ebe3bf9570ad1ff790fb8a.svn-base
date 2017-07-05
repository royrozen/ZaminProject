(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name articleForm.factory:ArticleForm
   *
   * @description
   *
   */
  angular
    .module('articleForm')
    .factory('ArticleForm', ArticleForm);

  function ArticleForm($http,consts) {
    var ArticleFormBase = {};

    ArticleFormBase.getArticle = function(articleId) {
      return $http({
        method: "GET",
        url: consts.serverUrl + "Article/GetArticle",
        params: {
          articleId: articleId
        }
      });
    };

    ArticleFormBase.save = function(article) {
      var fd = new FormData();
      fd.append("Id", article.Id);
      fd.append("Name", article.Name);
      if (article.Description != undefined) fd.append("Description", article.Description);
      if (article.File != undefined) fd.append("File", article.File);

      if (article.IsAuthorizedContent != undefined) fd.append("IsAuthorizedContent", article.IsAuthorizedContent);

      article.Tags.forEach(function(tag, index) {
        fd.append("Tags[" + index + "].Id", tag.Id);
        fd.append("Tags[" + index + "].TagName", tag.TagName);
      });

      return $http({
        method: "POST",
        url: consts.serverUrl + "Article/SaveArticle",
        data: fd,
        headers: {
          'Content-Type': undefined
        },
        transformRequest: angular.identity
      });
    };



    ArticleFormBase.getTags = function() {
      return $http({
        method: "GET",
        url: consts.serverUrl + "Tag/GetTags"
      });
    }


    return ArticleFormBase;
  }
}());

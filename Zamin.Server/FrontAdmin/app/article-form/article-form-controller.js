(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name articleForm.controller:ArticleFormCtrl
   *
   * @description
   *
   */
  angular
    .module('articleForm')
    .controller('ArticleFormCtrl', ArticleFormCtrl);

  function ArticleFormCtrl($scope, $location, $stateParams, $state, Tags, ArticleForm) {

    $scope.article = {
      Tags: []
    };


    $scope.tags = [];
    $scope.editMode = $state.current.name == 'articleFormUpdate';

    $scope.save = function(valid) {
      if (!valid) return;
      showLoader();
      ArticleForm.save($scope.article).then(function(response) {
        hideLoader();
        if (response.data) {
          $location.path("article");
        }
      });
    }

    $scope.getArticle = function() {
      showLoader();
      ArticleForm.getArticle($stateParams.articleId).then(function(response) {
        $scope.article = response.data;
        hideLoader();
        console.log($scope.article);
      });
    }

    
          $scope.getTags = function() {
            showLoader();
            Tags.getAll().then(function(response) {
              $scope.tags = response.data;
              hideLoader();
            });
          }

    //Tags autocomplete
    $scope.searchText = "";
    $scope.selectedItem = undefined;

    $scope.transformChip = function(chip) {
      // If it is an object, it's already a known chip
      if (angular.isObject(chip)) {
        return chip;
      }

      // Otherwise, create a new one
      //    return { name: chip, type: 'new' }
    }

    $scope.querySearch = function(query) {
      var results = query ? $scope.tags.filter(createFilterFor(query)) : [];
      return results;
    }

    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(tag) {
        return (tag.TagName.indexOf(lowercaseQuery) === 0) ||
          (tag.TagName.indexOf(lowercaseQuery) === 0);
      };
    }



    //Start
    if ($scope.editMode) $scope.getArticle();
      $scope.getTags();

  }
}());

(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name article.controller:ArticleCtrl
   *
   * @description
   *
   */
  angular
    .module('article')
    .controller('ArticleCtrl', ArticleCtrl);

  function ArticleCtrl($scope, $rootScope, $mdDialog,Article) {

    $scope.Articles = [];


      $scope.getAll = function() {
        showLoader();
        Article.getAll().then(function(response) {
          $scope.articles = response.data;

           hideLoader();
        });
      }

      $scope.deleteDialog = function(itemToDelete, index, ev) {
        $scope.itemToDelete = itemToDelete;
        $scope.itemToDelete.index = index;
        $mdDialog.show({
          targetEvent: ev,
          templateUrl: 'deleteDialog.html',
          scope: $scope,
          preserveScope: true,
          clickOutsideToClose: true
        });
      }

      $scope.delete = function() {
        showLoader();
        Article.delete($scope.itemToDelete.Id).then(function(response) {
          if (response.data) {
            $scope.articles.splice($scope.itemToDelete.index, 1);
            $scope.itemToDelete = {};
            $scope.hideDialog();
          }
          hideLoader();
        });
      }


     $scope.getAll();
    }
  }());

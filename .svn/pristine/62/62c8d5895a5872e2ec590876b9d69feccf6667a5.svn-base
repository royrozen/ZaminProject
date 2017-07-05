(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name activityForm.controller:ActivityFormCtrl
   *
   * @description
   *
   */
  angular
    .module('activityForm')
    .controller('ActivityFormCtrl', ActivityFormCtrl);

  function ActivityFormCtrl($scope, $location, $stateParams, $state, Tags, ActivityForm) {

    $scope.activity = {
      Tags: []
    };

    $scope.tags = [];
    $scope.editMode = $state.current.name == 'activityFormUpdate';

    $scope.save = function(valid) {
      if (!valid) return;
      showLoader();
      ActivityForm.save($scope.activity).then(function(response) {
        hideLoader();
        if (response.data) {
          $location.path("activity");
        }
      });
    }

    $scope.getActivity = function() {
      showLoader();
      ActivityForm.getActivity($stateParams.activityId).then(function(response) {
        $scope.activity = response.data;
        hideLoader();
        console.log($scope.activity);
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
    if ($scope.editMode) $scope.getActivity();
      $scope.getTags();

  }
}());

(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name lessonForm.controller:LessonFormCtrl
   *
   * @description
   *
   */
  angular
    .module('lessonForm')
    .controller('LessonFormCtrl', LessonFormCtrl);

  function LessonFormCtrl($scope, $rootScope, $location, $mdDialog, $state, $stateParams,LessonForm,Tags) {
    $scope.tags = [];

      $scope.imageVersion = 1;
      $scope.lesson = {
        Tags: [],
        CourseId : $stateParams.courseId
      };
      $scope.editMode = $state.current.name == 'lessonFormUpdate';

      //---------------Get functions---------------------
      $scope.getLesson = function() {
        showLoader();
        LessonForm.getLesson($stateParams.lessonId).then(function(response) {
          $scope.lesson = response.data;
          //$scope.lesson.LessonTypeId= $scope.lesson.LessonTypeId.toString();
          $scope.getTags();
          hideLoader();
        });
      }

      $scope.getTags = function() {
        showLoader();
        Tags.getAll().then(function(response) {
          $scope.tags = response.data;
          hideLoader();
        });
      }

      //---------------Post functions--------------------

      $scope.save = function(valid) {
        if (!valid) return;
        showLoader();
        LessonForm.save($scope.lesson).then(function(response) {
          hideLoader();
          if (response.data) {
            $location.path("course");
          }
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
      if ($scope.editMode) $scope.getLesson();
        $scope.getTags();

    }
  }());

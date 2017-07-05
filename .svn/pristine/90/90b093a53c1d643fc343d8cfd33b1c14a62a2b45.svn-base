(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name lessonPlanForm.controller:LessonPlanFormCtrl
   *
   * @description
   *
   */
  angular
    .module('lessonPlanForm')
    .controller('LessonPlanFormCtrl', LessonPlanFormCtrl);

  function LessonPlanFormCtrl($scope, $location, $stateParams, $state,LessonPlanForm) {

    $scope.lessonPlan = {
      Tags: []
    };


    $scope.tags = [];
    $scope.editMode = $state.current.name == 'lessonPlanFormUpdate';
    $scope.PresentationUrlsToDelete = [];
    $scope.WrittenLessonPlansUrlsToDelete = [];


    $scope.save = function(valid) {
      if (!valid) return;
      showLoader();
      LessonPlanForm.save($scope.lessonPlan).then(function(response) {
        hideLoader();
        if (response.data) {
          $location.path("lesson-plan");
        }

      })
    }
    $scope.getLessonPlan = function() {
      showLoader();
      LessonPlanForm.getLessonPlan($stateParams.lessonPlanId).then(function(response) {
        $scope.lessonPlan = response.data;
        hideLoader();
        console.log($scope.lessonPlan);
      });
    }


    $scope.getTags = function() {
      showLoader();
      LessonPlanForm.getTags().then(function(response) {
        $scope.tags = response.data;
        hideLoader();
      })
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



    $scope.fileAdded = function(newFiles,ArrayName) {
      if(ArrayName=="PresentationFiles"){
            if ($scope.lessonPlan.PresentationFiles == null) $scope.lessonPlan.PresentationFiles = [];
            newFiles.forEach(function(file) {
                $scope.lessonPlan.PresentationFiles.push(file);
            });
            //    $scope.lessonPlan.PresentationFiles.push(newFiles);
            newFiles = [];
          }
          else{ // (ArrayName=="WrittenLessonPlansFiles")
            if ($scope.lessonPlan.WrittenLessonPlansFiles == null) $scope.lessonPlan.WrittenLessonPlansFiles = [];
            newFiles.forEach(function(file) {
                $scope.lessonPlan.WrittenLessonPlansFiles.push(file);
            });
            //    $scope.lessonPlan.WrittenLessonPlansFiles.push(newFiles);
            newFiles = [];
          }
        }


        // $scope.removeFileFromPresentationFiles = function(url, index) {
        //     if ($scope.lessonPlan.PresentationUrlsToDelete == undefined) $scope.franchise.PresentationUrlsToDelete = [];
        //     $scope.lessonPlan.PresentationUrlsToDelete.push(url);
        //     $scope.lessonPlan.PresentationFilesUrl.splice(index, 1)
        // }
        //
        // $scope.removeFileFromWrittenLessonPlansFiles = function(url, index) {
        //     if ($scope.lessonPlan.WrittenLessonPlansUrlsToDelete == undefined) $scope.franchise.WrittenLessonPlansUrlsToDelete = [];
        //     $scope.lessonPlan.WrittenLessonPlansUrlsToDelete.push(url);
        //     $scope.lessonPlan.WrittenLessonPlansFilesUrl.splice(index, 1)
        // }




    //Start
    if ($scope.editMode) $scope.getLessonPlan();
      $scope.getTags();

  }
}());

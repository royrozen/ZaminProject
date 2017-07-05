(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name lesson.controller:LessonCtrl
   *
   * @description
   *
   */
  angular
    .module('lesson')
    .controller('LessonCtrl', LessonCtrl);

  function LessonCtrl($scope, $rootScope,$mdDialog,$stateParams, Lesson) {

    $scope.lessons = [];
    $scope.newItem = undefined;
    $scope.itemToDelete = {};


    $rootScope.courseName=$stateParams.courseName;
    $scope.courseId = $stateParams.courseId;

    //---------------Get functions---------------------
    $scope.getLessons = function() {
      showLoader();
      Lesson.getLessonsByCourseId($stateParams.courseId).then(function(response) {
        $scope.lessons = response.data;
        hideLoader();
      });
    }


    //---------------Post functions--------------------

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
      Lesson.delete($scope.itemToDelete.Id).then(function(response) {
        if (response.data) {
          $scope.lessons.splice($scope.itemToDelete.index, 1);
          $scope.itemToDelete = {};
          $scope.hideDialog();
        }
        hideLoader();
      });
    }

    //---------------------- Other -----------------
    $scope.setEditMode = function(item) {
      item.edit = true;
    }



    //-----------------------Start------------------
    $scope.getLessons();

  }
}());

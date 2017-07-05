/* global describe, beforeEach, it, browser, expect */
'use strict';

var LessonPlanFormPagePo = require('./lesson-plan-form.po');

describe('Lesson plan form page', function () {
  var lessonPlanFormPage;

  beforeEach(function () {
    lessonPlanFormPage = new LessonPlanFormPagePo();
    browser.get('/#/lesson-plan-form');
  });

  it('should say LessonPlanFormCtrl', function () {
    expect(lessonPlanFormPage.heading.getText()).toEqual('lessonPlanForm');
    expect(lessonPlanFormPage.text.getText()).toEqual('LessonPlanFormCtrl');
  });
});

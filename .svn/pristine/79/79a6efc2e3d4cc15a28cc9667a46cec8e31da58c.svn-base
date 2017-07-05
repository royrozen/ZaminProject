/* global describe, beforeEach, it, browser, expect */
'use strict';

var LessonPlanPagePo = require('./lesson-plan.po');

describe('Lesson plan page', function () {
  var lessonPlanPage;

  beforeEach(function () {
    lessonPlanPage = new LessonPlanPagePo();
    browser.get('/#/lesson-plan');
  });

  it('should say LessonPlanCtrl', function () {
    expect(lessonPlanPage.heading.getText()).toEqual('lessonPlan');
    expect(lessonPlanPage.text.getText()).toEqual('LessonPlanCtrl');
  });
});

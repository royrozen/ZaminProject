/* global describe, beforeEach, it, browser, expect */
'use strict';

var CoursesPagePo = require('./courses.po');

describe('Courses page', function () {
  var coursesPage;

  beforeEach(function () {
    coursesPage = new CoursesPagePo();
    browser.get('/#/courses');
  });

  it('should say CoursesCtrl', function () {
    expect(coursesPage.heading.getText()).toEqual('courses');
    expect(coursesPage.text.getText()).toEqual('CoursesCtrl');
  });
});

/* global describe, beforeEach, it, browser, expect */
'use strict';

var AboutPagePo = require('./about.po');

describe('About page', function () {
  var aboutPage;

  beforeEach(function () {
    aboutPage = new AboutPagePo();
    browser.get('/#/about');
  });

  it('should say AboutCtrl', function () {
    expect(aboutPage.heading.getText()).toEqual('about');
    expect(aboutPage.text.getText()).toEqual('AboutCtrl');
  });
});

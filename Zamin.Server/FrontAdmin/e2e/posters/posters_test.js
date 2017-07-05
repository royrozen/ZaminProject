/* global describe, beforeEach, it, browser, expect */
'use strict';

var PostersPagePo = require('./posters.po');

describe('Posters page', function () {
  var postersPage;

  beforeEach(function () {
    postersPage = new PostersPagePo();
    browser.get('/#/posters');
  });

  it('should say PostersCtrl', function () {
    expect(postersPage.heading.getText()).toEqual('posters');
    expect(postersPage.text.getText()).toEqual('PostersCtrl');
  });
});

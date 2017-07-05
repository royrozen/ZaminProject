/* global describe, beforeEach, it, browser, expect */
'use strict';

var PosterFormPagePo = require('./poster-form.po');

describe('Poster form page', function () {
  var posterFormPage;

  beforeEach(function () {
    posterFormPage = new PosterFormPagePo();
    browser.get('/#/poster-form');
  });

  it('should say PosterFormCtrl', function () {
    expect(posterFormPage.heading.getText()).toEqual('posterForm');
    expect(posterFormPage.text.getText()).toEqual('PosterFormCtrl');
  });
});

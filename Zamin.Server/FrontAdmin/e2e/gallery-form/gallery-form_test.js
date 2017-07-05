/* global describe, beforeEach, it, browser, expect */
'use strict';

var GalleryFormPagePo = require('./gallery-form.po');

describe('Gallery form page', function () {
  var galleryFormPage;

  beforeEach(function () {
    galleryFormPage = new GalleryFormPagePo();
    browser.get('/#/gallery-form');
  });

  it('should say GalleryFormCtrl', function () {
    expect(galleryFormPage.heading.getText()).toEqual('galleryForm');
    expect(galleryFormPage.text.getText()).toEqual('GalleryFormCtrl');
  });
});

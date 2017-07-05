/* global describe, beforeEach, it, browser, expect */
'use strict';

var GalleryPagePo = require('./gallery.po');

describe('Gallery page', function () {
  var galleryPage;

  beforeEach(function () {
    galleryPage = new GalleryPagePo();
    browser.get('/#/gallery');
  });

  it('should say GalleryCtrl', function () {
    expect(galleryPage.heading.getText()).toEqual('gallery');
    expect(galleryPage.text.getText()).toEqual('GalleryCtrl');
  });
});

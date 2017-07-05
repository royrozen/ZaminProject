/* global element, by */
'use strict';

function GalleryPage() {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
}

module.exports = GalleryPage;

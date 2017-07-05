/* global describe, beforeEach, it, browser, expect */
'use strict';

var TagsPagePo = require('./tags.po');

describe('Tags page', function () {
  var tagsPage;

  beforeEach(function () {
    tagsPage = new TagsPagePo();
    browser.get('/#/tags');
  });

  it('should say TagsCtrl', function () {
    expect(tagsPage.heading.getText()).toEqual('tags');
    expect(tagsPage.text.getText()).toEqual('TagsCtrl');
  });
});

/* global describe, beforeEach, it, browser, expect */
'use strict';

var TeenVideosPagePo = require('./teen-videos.po');

describe('Teen videos page', function () {
  var teenVideosPage;

  beforeEach(function () {
    teenVideosPage = new TeenVideosPagePo();
    browser.get('/#/teen-videos');
  });

  it('should say TeenVideosCtrl', function () {
    expect(teenVideosPage.heading.getText()).toEqual('teenVideos');
    expect(teenVideosPage.text.getText()).toEqual('TeenVideosCtrl');
  });
});

/* global describe, beforeEach, it, browser, expect */
'use strict';

var ArticleFormPagePo = require('./article-form.po');

describe('Article form page', function () {
  var articleFormPage;

  beforeEach(function () {
    articleFormPage = new ArticleFormPagePo();
    browser.get('/#/article-form');
  });

  it('should say ArticleFormCtrl', function () {
    expect(articleFormPage.heading.getText()).toEqual('articleForm');
    expect(articleFormPage.text.getText()).toEqual('ArticleFormCtrl');
  });
});

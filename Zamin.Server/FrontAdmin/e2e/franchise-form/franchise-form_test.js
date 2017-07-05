/* global describe, beforeEach, it, browser, expect */
'use strict';

var FranchiseFormPagePo = require('./franchise-form.po');

describe('Franchise form page', function () {
  var franchiseFormPage;

  beforeEach(function () {
    franchiseFormPage = new FranchiseFormPagePo();
    browser.get('/#/franchise-form');
  });

  it('should say FranchiseFormCtrl', function () {
    expect(franchiseFormPage.heading.getText()).toEqual('franchiseForm');
    expect(franchiseFormPage.text.getText()).toEqual('FranchiseFormCtrl');
  });
});

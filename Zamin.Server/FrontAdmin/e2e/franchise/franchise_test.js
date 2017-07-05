/* global describe, beforeEach, it, browser, expect */
'use strict';

var FranchisePagePo = require('./franchise.po');

describe('Franchise page', function () {
  var franchisePage;

  beforeEach(function () {
    franchisePage = new FranchisePagePo();
    browser.get('/#/franchise');
  });

  it('should say FranchiseCtrl', function () {
    expect(franchisePage.heading.getText()).toEqual('franchise');
    expect(franchisePage.text.getText()).toEqual('FranchiseCtrl');
  });
});

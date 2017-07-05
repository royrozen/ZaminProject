/* global describe, beforeEach, it, browser, expect */
'use strict';

var ComboPagePo = require('./combo.po');

describe('Combo page', function () {
  var comboPage;

  beforeEach(function () {
    comboPage = new ComboPagePo();
    browser.get('/#/combo');
  });

  it('should say ComboCtrl', function () {
    expect(comboPage.heading.getText()).toEqual('combo');
    expect(comboPage.text.getText()).toEqual('ComboCtrl');
  });
});

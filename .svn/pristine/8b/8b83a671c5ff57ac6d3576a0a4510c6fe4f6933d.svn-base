/* global describe, beforeEach, it, browser, expect */
'use strict';

var ComboFormPagePo = require('./combo-form.po');

describe('Combo form page', function () {
  var comboFormPage;

  beforeEach(function () {
    comboFormPage = new ComboFormPagePo();
    browser.get('/#/combo-form');
  });

  it('should say ComboFormCtrl', function () {
    expect(comboFormPage.heading.getText()).toEqual('comboForm');
    expect(comboFormPage.text.getText()).toEqual('ComboFormCtrl');
  });
});

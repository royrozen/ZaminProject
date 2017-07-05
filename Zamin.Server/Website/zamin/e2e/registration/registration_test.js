/* global describe, beforeEach, it, browser, expect */
'use strict';

var RegistrationPagePo = require('./registration.po');

describe('Registration page', function () {
  var registrationPage;

  beforeEach(function () {
    registrationPage = new RegistrationPagePo();
    browser.get('/#/registration');
  });

  it('should say RegistrationCtrl', function () {
    expect(registrationPage.heading.getText()).toEqual('registration');
    expect(registrationPage.text.getText()).toEqual('RegistrationCtrl');
  });
});

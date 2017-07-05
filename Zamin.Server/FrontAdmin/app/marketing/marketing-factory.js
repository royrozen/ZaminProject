(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name marketing.factory:Marketing
   *
   * @description
   *
   */
  angular
    .module('marketing')
    .factory('Marketing', Marketing);

  function Marketing($http,consts) {
    var MarketingBase = {};


    MarketingBase.sendMessageToClients = function(emailAddress,message,subject) {
      return $http({
        method: "GET",
        url: consts.serverUrl + "Marketing/SendMessageToClients",
        params: {
          emailAddress:emailAddress,
          message:message,
          subject:subject
        }
      });
    };

    return MarketingBase;
  }
}());

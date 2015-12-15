/// <reference path="../../../reference.ts" />
'use strict';

class WixivrSettings {
  clicks: number;
  name: string;

  /* @ngInject */
  constructor(private $scope: ng.IScope) {

    this.clicks = 0;
  }

  onClick() {
    this.clicks++;
  }
}

angular
  .module('wixivrSettingsInternal')
  .component('wixivrSettings', {
    templateUrl: 'views/wixivr-settings.html',
    controller: WixivrSettings,
    bindings: {
      name: '='
    }
  });

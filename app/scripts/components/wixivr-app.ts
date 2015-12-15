/// <reference path="../../../reference.ts" />
'use strict';

class WixivrApp {
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
  .module('wixivrAppInternal')
  .component('wixivrApp', {
    templateUrl: 'views/wixivr-app.html',
    controller: WixivrApp,
    bindings: {
      name: '='
    }
  });

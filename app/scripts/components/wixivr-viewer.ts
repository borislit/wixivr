/// <reference path="../../../reference.ts" />
'use strict';

class WixivrViewer {
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
  .module('wixivrViewerInternal')
  .component('wixivrViewer', {
    templateUrl: 'views/wixivr-viewer.html',
    controller: WixivrViewer,
    bindings: {
      name: '='
    }
  });

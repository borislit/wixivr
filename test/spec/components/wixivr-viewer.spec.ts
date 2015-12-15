/// <reference path="../../../reference.ts" />
'use strict';

describe('Component: wixivrViewer', () => {
  let element: ng.IAugmentedJQuery;
  let scope: ng.IScope;

  beforeEach(function () {
    module('wixivrViewerInternal');
  });

  beforeEach(inject(($rootScope: ng.IRootScopeService) => {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(($compile: ng.ICompileService) => {
    element = angular.element('<wixivr-viewer name="\'kukuchumuku\'"></wixivr-viewer>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toContain('This is kukuchumuku (0)');
  }));
});

/// <reference path="../../../reference.ts" />
'use strict';

describe('Component: wixivrSettings', () => {
  let element: ng.IAugmentedJQuery;
  let scope: ng.IScope;

  beforeEach(function () {
    module('wixivrSettingsInternal');
  });

  beforeEach(inject(($rootScope: ng.IRootScopeService) => {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(($compile: ng.ICompileService) => {
    element = angular.element('<wixivr-settings name="\'kukuchumuku\'"></wixivr-settings>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toContain('This is kukuchumuku (0)');
  }));
});

'use strict';

System.register(['angular', './threshold-pattern-entry'], function (_export, _context) {
  "use strict";

  var angular;
  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }, function (_thresholdPatternEntry) {}],
    execute: function () {

      angular.module('grafana.directives').directive("thresholdResults", function ($log) {
        return {
          templateUrl: 'public/plugins/analytic-engine-app/directives/threshold-results.html',
          scope: {
            results: '='
          },
          replace: true,
          link: function link(scope) {
            $log.log(scope);
          }
        };
      });
    }
  };
});
//# sourceMappingURL=threshold-results.js.map

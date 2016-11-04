'use strict';

System.register(['lodash', 'angular', './threshold-pattern-entry'], function (_export, _context) {
  "use strict";

  var _, angular;

  return {
    setters: [function (_lodash) {
      _ = _lodash.default;
    }, function (_angular) {
      angular = _angular.default;
    }, function (_thresholdPatternEntry) {}],
    execute: function () {

      angular.module('grafana.directives').directive("thresholdPatterns", function ($log) {
        return {
          templateUrl: 'public/plugins/analytic-engine-app/directives/threshold-patterns.html',
          scope: {
            thresholds: '='
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
//# sourceMappingURL=threshold-patterns.js.map

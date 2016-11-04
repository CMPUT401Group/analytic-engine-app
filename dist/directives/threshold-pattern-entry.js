'use strict';

System.register(['lodash', 'angular'], function (_export, _context) {
  "use strict";

  var _, angular;

  return {
    setters: [function (_lodash) {
      _ = _lodash.default;
    }, function (_angular) {
      angular = _angular.default;
    }],
    execute: function () {

      angular.module('grafana.directives').directive("thresholdPatternEntry", function ($log) {
        return {
          templateUrl: 'public/plugins/analytic-engine-app/directives/threshold-pattern-entry.html',
          scope: {
            metricName: '@',
            value: '@'
          },
          replace: true,
          link: function link(scope) {}
        };
      });
    }
  };
});
//# sourceMappingURL=threshold-pattern-entry.js.map

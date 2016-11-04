'use strict';

System.register(['lodash', 'angular', './metric-entry'], function (_export, _context) {
  "use strict";

  var _, angular;

  return {
    setters: [function (_lodash) {
      _ = _lodash.default;
    }, function (_angular) {
      angular = _angular.default;
    }, function (_metricEntry) {}],
    execute: function () {

      angular.module('grafana.directives').directive("metricResults", function ($log) {
        return {
          templateUrl: 'public/plugins/analytic-engine-app/directives/metric-results.html',
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
//# sourceMappingURL=metric-results.js.map

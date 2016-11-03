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

      angular.module('grafana.directives').directive("metricEntry", function () {
        return {
          templateUrl: 'public/plugins/analytic-engine-app/directives/metric-entry.html',
          scope: {
            ctrl: '=',
            endpoint: '='
          }
        };
      });
    }
  };
});
//# sourceMappingURL=metric-entry.js.map

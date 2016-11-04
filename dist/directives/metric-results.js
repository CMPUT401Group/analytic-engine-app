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

      angular.module('grafana.directives').directive("metricResults", function ($log) {
        return {
          templateUrl: 'public/plugins/analytic-engine-app/directives/metric-results.html',
          scope: {
            //metricResults: '='
          },
          replace: true,
          link: function link(scope) {
            scope.metricResults = [{ name: 'metric-1', value: 23 }, { name: 'metric-2', value: 45 }, { name: 'metric-3', value: 66 }];
          }
        };
      });
    }
  };
});
//# sourceMappingURL=metric-results.js.map

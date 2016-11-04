'use strict';

System.register(['angular'], function (_export, _context) {
  "use strict";

  var angular;
  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }],
    execute: function () {

      angular.module('grafana.directives').directive("thresholdPatternEntry", function ($log) {
        return {
          templateUrl: 'public/plugins/analytic-engine-app/directives/threshold-pattern-entry.html',
          scope: {
            threshold: '='
          },
          replace: true,
          link: function link(scope) {
            $log.log(scope.url);
          }
        };
      });
    }
  };
});
//# sourceMappingURL=threshold-pattern-entry.js.map

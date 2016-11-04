import angular from 'angular';

import './threshold-pattern-entry';

angular.module('grafana.directives').directive("thresholdResults", function($log) {
  return {
    templateUrl: 'public/plugins/analytic-engine-app/directives/threshold-results.html',
    scope: {
      thresholds: '='
    },
    replace: true,
    link(scope) {
      $log.log(scope);
    }
  }
});

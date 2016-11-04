import _ from 'lodash';
import angular from 'angular';

import './threshold-pattern-entry';

angular.module('grafana.directives').directive("thresholdPatterns", function($log) {
  return {
    templateUrl: 'public/plugins/analytic-engine-app/directives/threshold-patterns.html',
    scope: {
      thresholds: '='
    },
    replace: true,
    link(scope) {
      $log.log(scope);
    }
  }
});

import _ from 'lodash';
import angular from 'angular';

angular.module('grafana.directives').directive("thresholdPatternEntry", function($log) {
  return {
    templateUrl: 'public/plugins/analytic-engine-app/directives/threshold-pattern-entry.html',
    scope: {
      threshold: '='
    },
    replace: true,
    link(scope) {

    }
  }
});

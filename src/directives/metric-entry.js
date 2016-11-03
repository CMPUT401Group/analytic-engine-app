import _ from 'lodash';
import angular from 'angular';

angular.module('grafana.directives').directive("metricEntry", function($log) {
  return {
    templateUrl: 'public/plugins/analytic-engine-app/directives/metric-entry.html',
    scope: {
      name: '=',
      correlation: '='
    },
    link(scope) {
      $log.log(scope);
    }
  }
});

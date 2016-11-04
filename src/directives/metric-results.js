import _ from 'lodash';
import angular from 'angular';

import './metric-entry';

angular.module('grafana.directives').directive("metricResults", function($log) {
  return {
    templateUrl: 'public/plugins/analytic-engine-app/directives/metric-results.html',
    scope: {
      results: '='
    },
    replace: true,
    link(scope) {
      $log.log(scope);
    }
  }
});

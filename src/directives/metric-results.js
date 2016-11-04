import _ from 'lodash';
import angular from 'angular';

import './metric-entry';

angular.module('grafana.directives').directive("metricResults", function($log) {
  return {
    templateUrl: 'public/plugins/analytic-engine-app/directives/metric-results.html',
    scope: {
      //metricResults: '='
    },
    replace: true,
    link(scope) {
      scope.results = [
        { name: 'metric-1', value: 23 },
        { name: 'metric-2', value: 45 },
        { name: 'metric-3', value: 66 }
      ];
    }
  }
});

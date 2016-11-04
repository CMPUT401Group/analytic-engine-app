import {PanelCtrl} from  'app/plugins/sdk';

import '../css/example-app.css!'
import '../directives/metric-results';

class ExampleAppPanelCtrl extends PanelCtrl {

  constructor($scope, $injector, $http, backendSrv) {
    super($scope, $injector, $http, backendSrv);

    this.backendSrv = backendSrv;

    $scope.metricResults = [
      { name: 'metric-1', value: 23 },
      { name: 'metric-2', value: 45 },
      { name: 'metric-3', value: 66 }
    ];

    this.getConfig(config => {
      console.log(config);
      $http({
        method: 'GET',
        url: 'http://www.google.com'
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response);
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
      });
    });
  }
  getConfig(cb) {
    this.backendSrv.get('api/plugins/analytic-engine-app/settings').then(function(results) {
      cb(results);
    });
  }
}
ExampleAppPanelCtrl.template = '<h2 class="analytic-engine-app-heading"></h2>' +
  '<metric-results results="metricResults"></metric-results>';

export {
  ExampleAppPanelCtrl as PanelCtrl
};


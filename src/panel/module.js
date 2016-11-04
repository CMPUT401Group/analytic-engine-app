import {PanelCtrl} from  'app/plugins/sdk';

import '../css/example-app.css!'
import '../directives/metric-results';

class ExampleAppPanelCtrl extends PanelCtrl {

  constructor($scope, $injector, $http, backendSrv) {
    super($scope, $injector, $http, backendSrv);

    this.backendSrv = backendSrv;

    $scope.metricResults = [];

    this.getConfig(config => {
      console.log(config);
      let url = config.jsonData.analyticEngineURL;
      $http({
        method: 'GET',
        url: `${url}/pattern/threshold`
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.metricResults = response.data;
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


import {PanelCtrl} from  'app/plugins/sdk';

import '../css/example-app.css!'
import '../directives/threshold-patterns';

class ExampleAppPanelCtrl extends PanelCtrl {

  constructor($scope, $injector, $http, backendSrv) {
    super($scope, $injector, $http, backendSrv);

    this.backendSrv = backendSrv;
    this.dashboard = $scope.ctrl.dashboard;

    console.log(this.dashboard);

    $scope.thresholds = [];

    this.getConfig(config => {
      console.log(config);
      let url = config.jsonData.analyticEngineURL;
      $http({
        method: 'GET',
        url: `${url}/pattern/threshold`
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        response.data = response.data.map(threshold => {
          return threshold[0];
        });
        $scope.thresholds = response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        // todo: Use grafana toast thing to report error.
        console.log(response);
      });
    });
  }

  getConfig(cb) {
    this.backendSrv.get('api/plugins/analytic-engine-app/settings').then(function(config) {
      cb(config);
    });
  }
}
ExampleAppPanelCtrl.template = '<h2 class="analytic-engine-app-heading"></h2>' +
  '<threshold-patterns data-thresholds="thresholds"></threshold-patterns>';

export {
  ExampleAppPanelCtrl as PanelCtrl
};


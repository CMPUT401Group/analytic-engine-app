import {PanelCtrl} from  'app/plugins/sdk';

import '../css/example-app.css!'
import '../directives/metric-results';

class ExampleAppPanelCtrl extends PanelCtrl {

  constructor($scope, $injector, $http) {
    super($scope, $injector, $http);
    $scope.metricResults = [
      { name: 'metric-1', value: 23 },
      { name: 'metric-2', value: 45 },
      { name: 'metric-3', value: 66 }
    ];

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
  }

}
ExampleAppPanelCtrl.template = '<h2 class="analytic-engine-app-heading"></h2>' +
  '<metric-results results="metricResults"></metric-results>';

export {
  ExampleAppPanelCtrl as PanelCtrl
};


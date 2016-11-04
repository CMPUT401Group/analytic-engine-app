import {PanelCtrl} from  'app/plugins/sdk';

import '../css/example-app.css!'
import '../directives/metric-results';

class ExampleAppPanelCtrl extends PanelCtrl {

  constructor($scope, $injector) {
    super($scope, $injector);
    $scope.metricResults = [
      { name: 'metric-1', value: 23 },
      { name: 'metric-2', value: 45 },
      { name: 'metric-3', value: 66 }
    ];
  }

}
ExampleAppPanelCtrl.template = '<h2 class="analytic-engine-app-heading"></h2>' +
  '<metric-results results="metricResults"></metric-results>';

export {
  ExampleAppPanelCtrl as PanelCtrl
};


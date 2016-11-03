import {PanelCtrl} from  'app/plugins/sdk';

import '../css/example-app.css!'
import '../directives/metric-entry';

class ExampleAppPanelCtrl extends PanelCtrl {

  constructor($scope, $injector) {
    super($scope, $injector);
  }

}
ExampleAppPanelCtrl.template = '<h2 class="analytic-engine-app-heading"></h2>' +
  '<div class="card-section card-list-layout-list">' +
  '  <ol class="card-list" >' +
  '    <metric-entry correlation="69" name="metric-1"></metric-entry>' +
  '    <metric-entry correlation="69" name="metric-2"></metric-entry>' +
  '    <metric-entry correlation="69" name="metric-3"></metric-entry>' +
  '    <metric-entry correlation="69" name="metric-4"></metric-entry>' +
  '  </ol>' +
  '</div>';

export {
  ExampleAppPanelCtrl as PanelCtrl
};


import {PanelCtrl} from  'app/plugins/sdk';

import '../css/example-app.css!'
import '../directives/metric-entry';

class ExampleAppPanelCtrl extends PanelCtrl {

  constructor($scope, $injector) {
    super($scope, $injector);
  }

}
ExampleAppPanelCtrl.template = '<h2 class="analytic-engine-app-heading"></h2>' +
  '<div class="card-section card-list-layout-list" layout-mode>' +
  '  <ol class="card-list" >' +
  '    <metric-entry metric-name="metric1" correlation="69"></metric-entry>' +
  '    <metric-entry metric-name="metric2" correlation="69"></metric-entry>' +
  '    <metric-entry metric-name="metric3" correlation="69"></metric-entry>' +
  '    <metric-entry metric-name="metric4" correlation="69"></metric-entry>' +
  '  </ol>' +
  '</div>';

export {
  ExampleAppPanelCtrl as PanelCtrl
};


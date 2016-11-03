import {PanelCtrl} from  'app/plugins/sdk';

import '../css/example-app.css!'
import '../directives/metric-entry';

class ExampleAppPanelCtrl extends PanelCtrl {

  constructor($scope, $injector) {
    super($scope, $injector);
  }

}
ExampleAppPanelCtrl.template = '<h2 class="analytic-engine-app-heading"></h2>' +
  '<ol class="card-list" >' +
  '  <metric-entry></metric-entry>' +
  '  <metric-entry></metric-entry>' +
  '  <metric-entry></metric-entry>' +
  '  <metric-entry></metric-entry>' +
  '</ol>';

export {
  ExampleAppPanelCtrl as PanelCtrl
};


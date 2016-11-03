'use strict';

System.register(['app/plugins/sdk', '../css/example-app.css!', '../directives/metric-entry'], function (_export, _context) {
  "use strict";

  var PanelCtrl, ExampleAppPanelCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_appPluginsSdk) {
      PanelCtrl = _appPluginsSdk.PanelCtrl;
    }, function (_cssExampleAppCss) {}, function (_directivesMetricEntry) {}],
    execute: function () {
      _export('PanelCtrl', ExampleAppPanelCtrl = function (_PanelCtrl) {
        _inherits(ExampleAppPanelCtrl, _PanelCtrl);

        function ExampleAppPanelCtrl($scope, $injector) {
          _classCallCheck(this, ExampleAppPanelCtrl);

          return _possibleConstructorReturn(this, (ExampleAppPanelCtrl.__proto__ || Object.getPrototypeOf(ExampleAppPanelCtrl)).call(this, $scope, $injector));
        }

        return ExampleAppPanelCtrl;
      }(PanelCtrl));

      ExampleAppPanelCtrl.template = '<h2 class="analytic-engine-app-heading"></h2>' + '<div class="card-section card-list-layout-list">' + '  <ol class="card-list" >' + '    <metric-entry correlation="69" name="metric-1"></metric-entry>' + '    <metric-entry correlation="69" name="metric-2"></metric-entry>' + '    <metric-entry correlation="69" name="metric-3"></metric-entry>' + '    <metric-entry correlation="69" name="metric-4"></metric-entry>' + '  </ol>' + '</div>';

      _export('PanelCtrl', ExampleAppPanelCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map

'use strict';

System.register(['./components/logs', './components/stream', './components/config', './directives/metric-entry'], function (_export, _context) {
  "use strict";

  var LogsPageCtrl, StreamPageCtrl, AnalyticEngineAppConfigCtrl;
  return {
    setters: [function (_componentsLogs) {
      LogsPageCtrl = _componentsLogs.LogsPageCtrl;
    }, function (_componentsStream) {
      StreamPageCtrl = _componentsStream.StreamPageCtrl;
    }, function (_componentsConfig) {
      AnalyticEngineAppConfigCtrl = _componentsConfig.AnalyticEngineAppConfigCtrl;
    }, function (_directivesMetricEntry) {}],
    execute: function () {
      _export('ConfigCtrl', AnalyticEngineAppConfigCtrl);

      _export('StreamPageCtrl', StreamPageCtrl);

      _export('LogsPageCtrl', LogsPageCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map

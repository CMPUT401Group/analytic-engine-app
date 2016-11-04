'use strict';

System.register(['./components/logs', './components/stream', './components/threshold', './components/threshold-pages/result', './components/config', './directives/threshold-pattern-entry', './directives/threshold-patterns'], function (_export, _context) {
  "use strict";

  var LogsPageCtrl, StreamPageCtrl, ThresholdPageCtrl, ThresholdResultPageCtrl, AnalyticEngineAppConfigCtrl;
  return {
    setters: [function (_componentsLogs) {
      LogsPageCtrl = _componentsLogs.LogsPageCtrl;
    }, function (_componentsStream) {
      StreamPageCtrl = _componentsStream.StreamPageCtrl;
    }, function (_componentsThreshold) {
      ThresholdPageCtrl = _componentsThreshold.ThresholdPageCtrl;
    }, function (_componentsThresholdPagesResult) {
      ThresholdResultPageCtrl = _componentsThresholdPagesResult.ThresholdResultPageCtrl;
    }, function (_componentsConfig) {
      AnalyticEngineAppConfigCtrl = _componentsConfig.AnalyticEngineAppConfigCtrl;
    }, function (_directivesThresholdPatternEntry) {}, function (_directivesThresholdPatterns) {}],
    execute: function () {
      _export('ConfigCtrl', AnalyticEngineAppConfigCtrl);

      _export('StreamPageCtrl', StreamPageCtrl);

      _export('LogsPageCtrl', LogsPageCtrl);

      _export('ThresholdPageCtrl', ThresholdPageCtrl);

      _export('ThresholdResultPageCtrl', ThresholdResultPageCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map

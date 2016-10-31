'use strict';

System.register(['./datasource'], function (_export, _context) {
    "use strict";

    var AnalyticEngineAppDatasource, AnalyticEngineAppConfigCtrl;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_datasource) {
            AnalyticEngineAppDatasource = _datasource.AnalyticEngineAppDatasource;
        }],
        execute: function () {
            _export('ConfigCtrl', AnalyticEngineAppConfigCtrl = function AnalyticEngineAppConfigCtrl() {
                _classCallCheck(this, AnalyticEngineAppConfigCtrl);
            });

            AnalyticEngineAppDatasource.template = '<datasource-http-settings current="ctrl.current"></datasource-http-settings>';

            _export('AnalyticEngineAppDatasource', AnalyticEngineAppDatasource);

            _export('ConfigCtrl', AnalyticEngineAppConfigCtrl);
        }
    };
});
//# sourceMappingURL=module.js.map

"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var _createClass, AnalyticEngineAppDatasource;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      AnalyticEngineAppDatasource = function () {
        function AnalyticEngineAppDatasource() {
          _classCallCheck(this, AnalyticEngineAppDatasource);
        }

        _createClass(AnalyticEngineAppDatasource, [{
          key: "query",
          value: function query(options) {
            return [];
          }
        }, {
          key: "testDatasource",
          value: function testDatasource() {
            return false;
          }
        }]);

        return AnalyticEngineAppDatasource;
      }();

      _export("default", AnalyticEngineAppDatasource);
    }
  };
});
//# sourceMappingURL=datasource.js.map

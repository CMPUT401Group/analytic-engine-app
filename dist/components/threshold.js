"use strict";

System.register(["angular", "threshold-pages/home.html", "threshold-pages/result.html"], function (_export, _context) {
  "use strict";

  var angular, homePage, resultPage, _createClass, thresholdApp, ThresholdPageCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }, function (_thresholdPagesHomeHtml) {
      homePage = _thresholdPagesHomeHtml.default;
    }, function (_thresholdPagesResultHtml) {
      resultPage = _thresholdPagesResultHtml.default;
    }],
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

      thresholdApp = angular.module("thresholdApp", ["ngRoute"]);

      thresholdApp.config(function ($routeProvider) {
        $routeProvider.when("/", {
          template: homePage
        }).when("/result", {
          template: resultPage
        });
      });

      _export("ThresholdPageCtrl", ThresholdPageCtrl = function () {
        function ThresholdPageCtrl($scope, $injector, $http, $log, backendSrv) {
          _classCallCheck(this, ThresholdPageCtrl);

          this.$scope = $scope;
          this.$http = $http;
          this.$log = $log;
          this.backendSrv = backendSrv;

          this.thresholds = [];

          this.updateThreshold();
        }

        _createClass(ThresholdPageCtrl, [{
          key: "updateThreshold",
          value: function updateThreshold() {
            var _this = this;

            this.getConfig(function (config) {
              var url = config.jsonData.analyticEngineURL;
              _this.$http({
                method: 'GET',
                url: url + "/pattern/threshold"
              }).then(function (response) {
                // TODO: for now we only handle threshold with one pattern inside. Note,
                //       a single threshold pattern can hold many threshold inside. Refactor?
                _this.thresholds = response.data.map(function (threshold) {
                  return threshold.pattern[0];
                });
              }, function (response) {
                // todo: Use grafana toast thing to report error.
                console.log(response);
              });
            });
          }
        }, {
          key: "getConfig",
          value: function getConfig(cb) {
            this.backendSrv.get('api/plugins/analytic-engine-app/settings').then(function (config) {
              cb(config);
            });
          }
        }]);

        return ThresholdPageCtrl;
      }());

      ThresholdPageCtrl.templateUrl = 'components/threshold.html';

      _export("ThresholdPageCtrl", ThresholdPageCtrl);
    }
  };
});
//# sourceMappingURL=threshold.js.map

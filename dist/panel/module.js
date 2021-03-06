'use strict';

System.register(['app/plugins/sdk', '../css/example-app.css!', '../directives/threshold-patterns'], function (_export, _context) {
  "use strict";

  var PanelCtrl, _createClass, ExampleAppPanelCtrl;

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
    }, function (_cssExampleAppCss) {}, function (_directivesThresholdPatterns) {}],
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

      _export('PanelCtrl', ExampleAppPanelCtrl = function (_PanelCtrl) {
        _inherits(ExampleAppPanelCtrl, _PanelCtrl);

        function ExampleAppPanelCtrl($scope, $injector, $http, backendSrv) {
          _classCallCheck(this, ExampleAppPanelCtrl);

          var _this = _possibleConstructorReturn(this, (ExampleAppPanelCtrl.__proto__ || Object.getPrototypeOf(ExampleAppPanelCtrl)).call(this, $scope, $injector, $http, backendSrv));

          _this.backendSrv = backendSrv;
          _this.dashboard = $scope.ctrl.dashboard;

          console.log(_this.dashboard);

          $scope.thresholds = [];

          _this.getConfig(function (config) {
            console.log(config);
            var url = config.jsonData.analyticEngineURL;
            $http({
              method: 'GET',
              url: url + '/pattern/threshold'
            }).then(function successCallback(response) {
              // this callback will be called asynchronously
              // when the response is available

              // TODO: for now we only handle threshold with one pattern inside. Note,
              //       a single threshold pattern can hold many threshold inside. Refactor?
              $scope.thresholds = response.data.map(function (threshold) {
                return threshold.pattern[0];
              });
            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              // todo: Use grafana toast thing to report error.
              console.log(response);
            });
          });
          return _this;
        }

        _createClass(ExampleAppPanelCtrl, [{
          key: 'getConfig',
          value: function getConfig(cb) {
            this.backendSrv.get('api/plugins/analytic-engine-app/settings').then(function (config) {
              cb(config);
            });
          }
        }]);

        return ExampleAppPanelCtrl;
      }(PanelCtrl));

      ExampleAppPanelCtrl.template = '<h2 class="analytic-engine-app-heading"></h2>' + '<threshold-patterns data-thresholds="thresholds"></threshold-patterns>';

      _export('PanelCtrl', ExampleAppPanelCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map

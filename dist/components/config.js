'use strict';

System.register(['lodash'], function (_export, _context) {
  "use strict";

  var _, _createClass, appName, AnalyticEngineAppConfigCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_lodash) {
      _ = _lodash.default;
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

      appName = "Analytic Engine";

      _export('AnalyticEngineAppConfigCtrl', AnalyticEngineAppConfigCtrl = function () {
        function AnalyticEngineAppConfigCtrl($scope, $injector, $q, backendSrv, alertSrv) {
          _classCallCheck(this, AnalyticEngineAppConfigCtrl);

          this.$q = $q;
          this.backendSrv = backendSrv;
          this.alertSrv = alertSrv;
          this.appEditCtrl.setPreUpdateHook(this.preUpdate.bind(this));
          this.appEditCtrl.setPostUpdateHook(this.postUpdate.bind(this));

          // TODO: We will worry about security later. As for the moment,
          //       anyone can do query to our analyic-engine.
        }

        _createClass(AnalyticEngineAppConfigCtrl, [{
          key: 'preUpdate',
          value: function preUpdate() {
            var model = this.appModel;
            if (!model.enabled) {
              return this.$q.resolve();
            }

            if (!this._isValidateAnalyticEngineURL(model.jsonData.analyticEngineURL)) {
              model.enabled = false;
              this.errorMsg = appName + ' Server URL is not valid.';
              return this.$q.reject(this.errorMsg);
            }

            var appConfig = { jsonData: model.jsonData };
            return this.backendSrv.post('api/plugins/analytic-engine-app/settings', appConfig).then(function (resp) {
              console.log('Analytic Engine config updated.');
            });
          }
        }, {
          key: 'postUpdate',
          value: function postUpdate() {
            if (!this.appModel.enabled) {
              return this.$q.resolve();
            }

            return this.appEditCtrl.importDashboards().then(function () {
              return {
                url: "dashboard/db/analytic-engine-home",
                message: "worldPing app installed!"
              };
            });
          }
        }, {
          key: 'getConfig',
          value: function getConfig() {
            return this.backendSrv.get('api/plugins/analytic-engine-app/settings').then(function (results) {
              console.log(results);
            });
          }
        }, {
          key: '_isValidateAnalyticEngineURL',
          value: function _isValidateAnalyticEngineURL(url) {
            return _.isString(url);
          }
        }]);

        return AnalyticEngineAppConfigCtrl;
      }());

      _export('AnalyticEngineAppConfigCtrl', AnalyticEngineAppConfigCtrl);

      AnalyticEngineAppConfigCtrl.templateUrl = 'components/config.html';
    }
  };
});
//# sourceMappingURL=config.js.map

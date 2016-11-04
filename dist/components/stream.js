'use strict';

System.register(['app/plugins/sdk', 'lodash'], function (_export, _context) {
            "use strict";

            var PanelCtrl, _, _createClass, StreamPageCtrl;

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
                        }, function (_lodash) {
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

                                    _export('StreamPageCtrl', StreamPageCtrl = function (_PanelCtrl) {
                                                _inherits(StreamPageCtrl, _PanelCtrl);

                                                function StreamPageCtrl($scope, $injector, backendSrv) {
                                                            _classCallCheck(this, StreamPageCtrl);

                                                            var _this = _possibleConstructorReturn(this, (StreamPageCtrl.__proto__ || Object.getPrototypeOf(StreamPageCtrl)).call(this, $scope, $injector, backendSrv));

                                                            _this.backendSrv = backendSrv;
                                                            _this.pageReady = true;
                                                            _this.from = Date();
                                                            _this.to = Date();
                                                            _this.isOrgAdmin = true;
                                                            _this.metricname = "";
                                                            _this.results = [];
                                                            search();

                                                            return _this;
                                                }

                                                _createClass(StreamPageCtrl, [{
                                                            key: 'search',
                                                            value: function search() {

                                                                        var self = this;

                                                                        return this.backendSrv.get('162.246.157.107:8888/pattern/threshold').then(function (resp) {

                                                                                    if (resp.meta.code !== 200) {

                                                                                                self.alertSrv.set("failed to get probes.", resp.meta.message, 'error', 10000);

                                                                                                return self.$q.reject(resp.meta.message);
                                                                                    }

                                                                                    self.pageReady = true;

                                                                                    self.probes = resp.body;
                                                                        });
                                                            }
                                                }]);

                                                return StreamPageCtrl;
                                    }(PanelCtrl));

                                    _export('StreamPageCtrl', StreamPageCtrl);

                                    StreamPageCtrl.templateUrl = 'components/stream.html';
                        }
            };
});
//# sourceMappingURL=stream.js.map

'use strict';

System.register(['lodash'], function (_export, _context) {
            "use strict";

            var _, _createClass, StreamPageCtrl;

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

                                    _export('StreamPageCtrl', StreamPageCtrl = function () {
                                                function StreamPageCtrl($scope, $injector, backendSrv) {
                                                            _classCallCheck(this, StreamPageCtrl);

                                                            this.backendSrv = backendSrv;
                                                            this.pageReady = true;
                                                            this.from = Date();
                                                            this.to = Date();
                                                            this.isOrgAdmin = true;
                                                            this.metricname = "";
                                                            this.results = [];
                                                            this.search();
                                                }

                                                _createClass(StreamPageCtrl, [{
                                                            key: 'search',
                                                            value: function search() {

                                                                        var self = this;

                                                                        return this.backendSrv.get('https://162.246.157.107:666/pattern/threshold').then(function (resp) {

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
                                    }());

                                    StreamPageCtrl.templateUrl = 'components/stream.html';

                                    _export('StreamPageCtrl', StreamPageCtrl);
                        }
            };
});
//# sourceMappingURL=stream.js.map

"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var ThresholdResultPageCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("ThresholdResultPageCtrl", ThresholdResultPageCtrl = function ThresholdResultPageCtrl($scope, $injector, $http, $log, backendSrv) {
        _classCallCheck(this, ThresholdResultPageCtrl);

        this.$scope = $scope;
        this.$http = $http;
        this.$log = $log;
        this.backendSrv = backendSrv;

        this.results = ["match1", "match2", "match3", "match4", "match5"];
      });

      ThresholdResultPageCtrl.templateUrl = 'components/threshold-pages/result.html';

      _export("ThresholdResultPageCtrl", ThresholdResultPageCtrl);
    }
  };
});
//# sourceMappingURL=result.js.map

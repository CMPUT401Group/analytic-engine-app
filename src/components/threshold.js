class ThresholdPageCtrl {
  constructor($scope, $injector, $http, $log, backendSrv) {
    this.$scope = $scope;
    this.$http = $http;
    this.$log = $log;
    this.backendSrv = backendSrv;

    this.thresholds = [];

    this.updateThreshold();
  }

  updateThreshold() {
    this.getConfig(config => {
      let url = config.jsonData.analyticEngineURL;
      this.$http({
        method: 'GET',
        url: `${url}/pattern/threshold`
      }).then(response => {
        // TODO: for now we only handle threshold with one pattern inside. Note,
        //       a single threshold pattern can hold many threshold inside. Refactor?
        this.thresholds = response.data.map(threshold => {
          return threshold.pattern[0];
        });
      }, response => {
        // todo: Use grafana toast thing to report error.
        console.log(response);
      });
    });
  }

  getConfig(cb) {
    this.backendSrv.get('api/plugins/analytic-engine-app/settings').then(function(config) {
      cb(config);
    });
  }
}

ThresholdPageCtrl.templateUrl = 'components/threshold.html';
export{ThresholdPageCtrl};

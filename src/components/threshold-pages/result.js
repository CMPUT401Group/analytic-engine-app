class ThresholdResultPageCtrl {
  constructor($scope, $injector, $http, $log, backendSrv) {
    this.$scope = $scope;
    this.$http = $http;
    this.$log = $log;
    this.backendSrv = backendSrv;

    this.results = [
      "match1",
      "match2",
      "match3",
      "match4",
      "match5"
    ];
  }
}

ThresholdResultPageCtrl.templateUrl = 'components/threshold-pages/result.html';
export{ThresholdResultPageCtrl};

class ThresholdResultPageCtrl {
  constructor($scope, $injector, $http, $log, backendSrv) {
    this.$scope = $scope;
    this.$http = $http;
    this.$log = $log;
    this.backendSrv = backendSrv;
  }
}

ThresholdResultPageCtrl.templateUrl = 'components/threshold-pages/result.html';
export{ThresholdResultPageCtrl};

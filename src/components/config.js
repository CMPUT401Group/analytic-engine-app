import _ from 'lodash'

let appName = "Analytic Engine";

export class AnalyticEngineAppConfigCtrl {
  constructor($scope, $injector, $q, backendSrv, alertSrv) {
    this.$q = $q;
    this.backendSrv = backendSrv;
    this.alertSrv = alertSrv;
    this.appEditCtrl.setPreUpdateHook(this.preUpdate.bind(this));
    this.appEditCtrl.setPostUpdateHook(this.postUpdate.bind(this));

    // TODO: We will worry about security later. As for the moment,
    //       anyone can do query to our analyic-engine.
  }

  preUpdate() {
    let model = this.appModel;
    if (!model.enabled) {
      return this.$q.resolve();
    }

    if (!this._isValidateAnalyticEngineURL(model.jsonData.analyticEngineURL)) {
      model.enabled = false;
      this.errorMsg = `${appName} Server URL is not valid.`;
      return this.$q.reject(this.errorMsg);
    }

    let appConfig = {jsonData: model.jsonData};
    return this.backendSrv.post('api/plugins/analytic-engine-app/settings', appConfig).then(resp => {
      console.log('Analytic Engine config updated.');
    });
  }

  postUpdate() {
    if (!this.appModel.enabled) {
      return this.$q.resolve();
    }

    return this.appEditCtrl.importDashboards().then(() => {
      return {
        url: "dashboard/db/analytic-engine-home",
        message: "worldPing app installed!"
      };
    });
  }

  getConfig() {
    return this.backendSrv.get('api/plugins/analytic-engine-app/settings').then(results => {
      console.log(results);
    });
  }

  _isValidateAnalyticEngineURL(url) {
    return _.isString(url);
  }
}
AnalyticEngineAppConfigCtrl.templateUrl = 'components/config.html';



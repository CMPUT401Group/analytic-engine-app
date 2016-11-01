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

    if (!_.isString(model.analyticEngineURL)) {
      model.enabled = false;
      this.errorMsg = `${appName} Server URL not set`;
      return this.$q.reject(this.errorMsg);
    }

    console.log(model.analyticEngineURL);
    let appConfig = {
      analyticEngineURL: model.analyticEngineURL
    };


    return this.backendSrv.post('api/plugin-proxy/analytic-engine-app/config', appConfig).then((resp) => {
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
}
AnalyticEngineAppConfigCtrl.templateUrl = 'components/config.html';



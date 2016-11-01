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
    console.log('Pre-Update');

    var model = this.appModel;
    if (!model.enabled) {
      return this.$q.resolve();
    }

    if (!_.isString(model.analyticEngineURL)) {
      model.enabled = false;
      this.errorMsg = `${appName} Server URL not set`;
      return this.$q.reject(this.errorMsg);
    }

    return this.$q.resolve();
  }

  postUpdate() {
    console.log('Post-Update');
    if (!this.appModel.enabled) {
      return this.$q.resolve();
    }

    return this.$q.then(() => {
      return self.appEditCtrl.importDashboards().then(() => {
        return {
          url: "dashboard/db/analytic-engine-home",
          message: "worldPing app installed!"
        };
      });
    });
  }
}
AnalyticEngineAppConfigCtrl.templateUrl = 'components/config.html';



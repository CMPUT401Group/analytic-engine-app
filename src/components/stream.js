import {PanelCtrl} from 'app/plugins/sdk';
import _ from 'lodash';


export class StreamPageCtrl extends PanelCtrl{
   
    constructor($scope,$injector,backendSrv)
    {
        super($scope,$injector,backendSrv);
        this.backendSrv = backendSrv;
        this.pageReady = true;
        this.from = Date();
        this.to = Date();
        this.isOrgAdmin = true;
        this.metricname="";
        this.results = [];
        search();
    
    }

    search()
    {

        var self = this;

        return this.backendSrv.get('162.246.157.107:8888/pattern/threshold').then(function(resp) {

            if (resp.meta.code !== 200) {

                self.alertSrv.set("failed to get probes.", resp.meta.message, 'error', 10000);

                return self.$q.reject(resp.meta.message);

            }

            self.pageReady = true;

            self.probes = resp.body;

        });

    }
}

StreamPageCtrl.templateUrl = 'components/stream.html';



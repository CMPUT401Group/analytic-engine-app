import _ from 'lodash';


class StreamPageCtrl {
   
    constructor($scope,$injector,backendSrv)
    {
        this.backendSrv = backendSrv;
        this.pageReady = true;
        this.from = new Date();
        this.to = new Date();
        this.isOrgAdmin = true;
        this.metricname="";
        this.results = [];
        this.search();
    
    }

    search(){

        var self = this;

        return this.backendSrv.get('https://162.246.157.107:666/pattern/threshold').then(function(resp) {

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
export{StreamPageCtrl};



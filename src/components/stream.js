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

        return this.backendSrv.get('analytic-engine/pattern/threshold').then(function(resp) {

            self.pageReady = true;

            self.results = resp.data.map(threshold => {
                return threshold.pattern[0];
            });

        });

    }
}

StreamPageCtrl.templateUrl = 'components/stream.html';
export{StreamPageCtrl};



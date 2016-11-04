import {PanelCtrl} from 'app/plugins/sdk';



export class StreamPageCtrl extends PanelCtrl{
   
    constructor($scope,$injector){
        super($scope,$inejctor);
        this.pageready = true;
        this.from = Date();
        this.to = Date();
        this.metricname="";
    
    }

    search()
    {


    }
}

StreamPageCtrl.templateUrl = 'components/stream.html';



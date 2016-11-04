import {PaneCtrl} from 'app/plugins/sdk';



export class StreamPageCtrl extends PanelCtrl{
    this.pageready = true;
    this.from = Date();
    this.to = Date();
    this.metricname="";
    search()
    {


    }
}

StreamPageCtrl.templateUrl = 'components/stream.html';



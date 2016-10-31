import {AnalyticEngineAppDatasource} from  './datasource';

class AnalyticEngineAppConfigCtrl {}
AnalyticEngineAppDatasource.template = '<datasource-http-settings current="ctrl.current"></datasource-http-settings>';

export {
    AnalyticEngineAppDatasource,
    AnalyticEngineAppConfigCtrl as ConfigCtrl
};
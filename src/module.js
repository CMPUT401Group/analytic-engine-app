import {LogsPageCtrl} from './components/logs';
import {StreamPageCtrl} from './components/stream';
import {AnalyticEngineAppConfigCtrl} from './components/config';

import './directives/threshold-pattern-entry';
import './directives/threshold-patterns';

export {
  AnalyticEngineAppConfigCtrl as ConfigCtrl,
  StreamPageCtrl, //Matches pages.component in plugin.json
  LogsPageCtrl //Matches pages.component in plugin.json
};

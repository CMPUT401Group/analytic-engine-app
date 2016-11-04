import {LogsPageCtrl} from './components/logs';
import {StreamPageCtrl} from './components/stream';
import {ThresholdPageCtrl} from './components/threshold';
import {ThresholdResultPageCtrl} from './components/threshold-pages/result';
import {AnalyticEngineAppConfigCtrl} from './components/config';

import './directives/threshold-pattern-entry';
import './directives/threshold-patterns';

export {
  AnalyticEngineAppConfigCtrl as ConfigCtrl,
  StreamPageCtrl, //Matches pages.component in plugin.json
  LogsPageCtrl, //Matches pages.component in plugin.json
  ThresholdPageCtrl,
  ThresholdResultPageCtrl
};

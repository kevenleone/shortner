import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import base from './base';
import shortner from './shortner';

export default (history) => combineReducers({
  base,
  shortner,
  router: connectRouter(history),
});

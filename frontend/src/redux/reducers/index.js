import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import base from './base';
import user from './user';
import shortner from './shortner';

export default (history) => combineReducers({
  base,
  user,
  shortner,
  router: connectRouter(history),
});

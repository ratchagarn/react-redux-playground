/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Core - root reducer
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { createStore, combineReducers } from 'redux';

// reducers
import moduleAuthReducer from 'modules/auth';
import moduleCounterReducer from 'modules/counter';
import moduleTimerReducer from 'modules/timer';
import moduleJsonPlaceholderReducer from 'modules/jsonPlaceholder';

export default combineReducers({
  auth: moduleAuthReducer,
  counter: moduleCounterReducer,
  timer: moduleTimerReducer,
  jsonPlaceholder: moduleJsonPlaceholderReducer
});

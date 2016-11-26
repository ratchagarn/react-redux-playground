/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Core - root reducer
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { createStore, combineReducers } from 'redux';

// reducers
import moduleCounterReducer from 'modules/counter';
import moduleTimerReducer from 'modules/timer';

export default combineReducers({
  counter: moduleCounterReducer,
  timer: moduleTimerReducer
});

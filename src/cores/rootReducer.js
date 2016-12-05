/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Core - root reducer
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { createStore, combineReducers } from 'redux';

// third party
import { routerReducer } from 'react-router-redux'

// reducers
import moduleAuthReducer from 'modules/auth';
import moduleCounterReducer from 'modules/counter';
import moduleTimerReducer from 'modules/timer';
import moduleJsonPlaceholderReducer from 'modules/jsonPlaceholder';

export default combineReducers({
  routing: routerReducer,
  auth: moduleAuthReducer,
  counter: moduleCounterReducer,
  timer: moduleTimerReducer,
  jsonPlaceholder: moduleJsonPlaceholderReducer
});

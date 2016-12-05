/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Core - root reducer
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { createStore, combineReducers } from 'redux';

// third party
import { routerReducer } from 'react-router-redux'

// reducers
import moduleAuthReducer    from 'modules/auth';
import moduleCounterReducer from 'modules/counter';
import moduleJsonReducer    from 'modules/Json';

export default combineReducers({
  routing: routerReducer,
  auth: moduleAuthReducer,
  counter: moduleCounterReducer,
  json: moduleJsonReducer
});

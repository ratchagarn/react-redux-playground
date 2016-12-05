/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Core - get application store
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';

import thunk from 'redux-thunk';
import { routerMiddleware, } from 'react-router-redux';

import rootReducer from 'cores/rootReducer';


// https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify here name, actionsBlacklist, actionsCreators and other options
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, routerMiddleware(browserHistory)),
  // other store enhancers if any
);


const store = createStore(rootReducer, enhancer);

export default store;

/**
 * Alias for `dispatch`
 */
export function dispatch(...args) {
  return store.dispath(...args);
}

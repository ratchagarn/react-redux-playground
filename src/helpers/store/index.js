/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Helper - store
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { createStore, combineReducers } from 'redux';


let _store = null;


/**
 * Create store for application.
 *
 * @param {object} reducers - list of reducers
 *
 * @return {object} store object.
 */
export function createStoreForApp(reducers) {
  const rootReducer = combineReducers(reducers);
  _store = createStore(rootReducer);

  return _store;
}


/**
 * Get store dispatch.
 *
 * @return {function} store dispatch function.
 */
export function getDispatch() {
  if (_store && _store.dispatch) {
    return _store.dispatch;
  }
}


/**
 * Helper for create reducer
 *
 * @param  {any} initialState - initial state for reducer.
 * @param  {object} handlers  - handlers for reducer.
 *
 * @return {function} reducer function.
 *
 * @example
  const todos = createReducer([], {
    [ActionTypes.ADD_TODO](state, action) {
      let text = action.text.trim()
      return [ ...state, text ]
    }
  })
 */
export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }
    else {
      return state
    }
  }
}

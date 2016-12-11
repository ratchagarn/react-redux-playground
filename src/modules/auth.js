/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Moduels - auth
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { createReducer } from 'helpers/redux';


/**
 * --------------------------------------------------------
 * Initialize state
 * --------------------------------------------------------
 */
export const initialState = {
  authenticated: false
};


/**
 * --------------------------------------------------------
 * Action types
 * --------------------------------------------------------
 */
export const actionTypes = {
  SET_SUCCESS: 'Auth/SET_SUCCESS',
  SET_FAILURE: 'Auth/SET_FAILURE'
};


/**
 * --------------------------------------------------------
 * Reducer
 * --------------------------------------------------------
 */
export default createReducer(initialState, {

  // LOGIN/SUCCESS
  [actionTypes.SET_SUCCESS](state, action) {
    return {
      ...state,
      authenticated: true
    };
  },

  // LOGOUT/FAILURE
  [actionTypes.SET_FAILURE](state, action) {
    return {
      ...state,
      authenticated: false
    };
  }
});


/**
 * --------------------------------------------------------
 * Action creators
 * --------------------------------------------------------
 */
export const actionCreators = {
  doSetAuthSuccess,
  doSetAuthFailure
};

/**
 * Set auth to `success`.
 */
export function doSetAuthSuccess() {
  return {
    type: actionTypes.SET_SUCCESS
  };
}

/**
 * Set auth to `failure`
 */
export function doSetAuthFailure() {
  return {
    type: actionTypes.SET_FAILURE
  };
}

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
  SET_AUTH_SUCCESS:  'Auth/SET_AUTH_SUCCESS',
  SET_AUTH_FAILURE:  'Auth/SET_AUTH_FAILURE'
};


/**
 * --------------------------------------------------------
 * Reducer
 * --------------------------------------------------------
 */
export default createReducer(initialState, {

  // LOGIN/SUCCESS
  [actionTypes.SET_AUTH_SUCCESS](state, action) {
    return {
      ...state,
      authenticated: true
    };
  },

  // LOGOUT/FAILURE
  [actionTypes.SET_AUTH_FAILURE](state, action) {
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
    type: actionTypes.SET_AUTH_SUCCESS
  };
}

/**
 * Set auth to `failure`
 */
export function doSetAuthFailure(tick) {
  return {
    type: actionTypes.SET_AUTH_FAILURE
  };
}

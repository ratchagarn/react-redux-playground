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
  authenticated: false,
  updated: null
};


/**
 * --------------------------------------------------------
 * Action types
 * --------------------------------------------------------
 */
export const actionTypes = {
  SET_SUCCESS: 'Auth/SET_SUCCESS',
  SET_FAILURE: 'Auth/SET_FAILURE',
  SET_UPDATED: 'Auth/SET_UPDATED'
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
  },

  // UPDATED TIME
  [actionTypes.SET_UPDATED](state, action) {
    return {
      ...state,
      updated: action.updated
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
  doSetAuthFailure,
  doSetUpdated
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

/**
 * Set auth updated.
 *
 * @param {string} updated - updated time.
 */
export function doSetUpdated(updated) {
  return {
    type: actionTypes.SET_UPDATED,
    updated
  };
}

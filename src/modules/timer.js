/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Moduels - timer
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { createReducer } from 'helpers/store';


/**
 * --------------------------------------------------------
 * Initialize state
 * --------------------------------------------------------
 */
export const initState = {
  status: 'stop',
  time: 0
};


/**
 * --------------------------------------------------------
 * Action types
 * --------------------------------------------------------
 */
export const actionTypes = {
  START: 'Timer/START',
  STOP:  'Timer/STOP',
  SET:   'Timer/SET'
};


/**
 * --------------------------------------------------------
 * Reducer
 * --------------------------------------------------------
 */
export default createReducer(initState, {

  // Start
  [actionTypes.START](state, action) {
    return {
      ...state,
      status: 'start',
      time: 0
    };
  },

  // Stop
  [actionTypes.STOP](state, action) {
    return {
      ...state,
      status: 'stop'
    };
  },

  // Set
  [actionTypes.SET](state, action) {
    return {
      ...state,
      time: state.time + action.time
    };
  }
});


/**
 * --------------------------------------------------------
 * Action creators
 * --------------------------------------------------------
 */

/**
 * Start timer
 */
export function timerStart() {
  return {
    type: actionTypes.START
  };
}

/**
 * Stop timer
 */
export function timerStop() {
  return {
    type: actionTypes.STOP
  };
}

/**
 * Set time
 *
 * @param {number} time
 */
export function timerSetTime(time) {
  return {
    type: actionTypes.SET,
    time
  };
}

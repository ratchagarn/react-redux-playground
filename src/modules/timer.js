/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Moduels - timer
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { createReducer } from 'helpers/redux';


/**
 * --------------------------------------------------------
 * Initialize state
 * --------------------------------------------------------
 */
export const initialState = {
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
export default createReducer(initialState, {

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
export const actionCreators = {
  timerStart,
  timerStop,
  timerSetTime
};


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

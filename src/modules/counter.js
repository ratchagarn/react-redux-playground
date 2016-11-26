/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Moduels - counter
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { createReducer } from 'helpers/store';


/**
 * --------------------------------------------------------
 * Initialize state
 * --------------------------------------------------------
 */
export const initState = {
  tick: 1,
  count: 0
};


/**
 * --------------------------------------------------------
 * Action types
 * --------------------------------------------------------
 */
export const actionTypes = {
  ADD:  'Counter/ADD',
  TICK: 'Counter/TICK'
};


/**
 * --------------------------------------------------------
 * Reducer
 * --------------------------------------------------------
 */
export default createReducer(initState, {

  // Add
  [actionTypes.ADD](state, action) {
    return {
      ...state,
      count: state.count + state.tick
    };
  },

  // Tick
  [actionTypes.TICK](state, action) {
    return {
      ...state,
      tick: parseInt(action.tick, 10)
    };
  }
});


/**
 * --------------------------------------------------------
 * Action creators
 * --------------------------------------------------------
 */

export const actionCreators = {
  addCounter,
  addTick
};

/**
 * Add counter
 */
export function addCounter() {
  return {
    type: actionTypes.ADD
  };
}

/**
 * Increase tick
 *
 * @param {number} add - number of add
 */
export function addTick(tick) {
  return {
    type: actionTypes.TICK,
    tick,
  };
}

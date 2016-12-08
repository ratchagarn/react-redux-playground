/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Moduels - counter
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { createReducer } from 'helpers/redux';


/**
 * --------------------------------------------------------
 * Initialize state
 * --------------------------------------------------------
 */
export const initialState = {
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
export default createReducer(initialState, {

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
  doAddCounter,
  doSetTick
};

/**
 * Add counter
 */
export function doAddCounter() {
  return {
    type: actionTypes.ADD
  };
}

/**
 * Set tick
 *
 * @param {number} set - number of tick to set.
 */
export function doSetTick(tick) {
  return {
    type: actionTypes.TICK,
    tick,
  };
}

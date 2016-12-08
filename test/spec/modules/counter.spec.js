/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Test - module - counter
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { expect } from 'chai';

import reducer, {
  initialState,
  actionCreators as actions,
  actionTypes as types
} from 'modules/counter';


/**
 * --------------------------------------------------------
 * Spec - module - counter
 * --------------------------------------------------------
 */
describe('Module - counter', function() {

  /**
   * Action creators
   * --------------------------------------------------------
   */
  describe('action creators', () => {
    it('should create an action to add a counter', () => {
      const expectedAction = {
        type: types.ADD
      };

      expect(actions.doAddCounter()).to.deep.equal(expectedAction);
    });

    it('should create an action to add a tick', () => {
      const tick = 5;
      const expectedAction = {
        type: types.TICK,
        tick,
      };

      expect(actions.doSetTick(tick)).to.deep.equal(expectedAction);
    });
  });

  /**
   * Reducers
   * --------------------------------------------------------
   */
  describe('reducers', () => {
    it('should return the initial state', () => {
      const state = reducer(undefined, {});
      expect(state).to.deep.equal(initialState);
    });

    it('should handle ADD', () => {
      let prevState, state, result;

      prevState = { tick: 1, count: 10 };
      result = { ...prevState, count: 11 };
      state = reducer(prevState, actions.doAddCounter());
      expect(state).to.deep.equal(result);

      prevState = { tick: 4, count: 34 };
      result = { ...prevState, count: 38 };
      state = reducer(prevState, actions.doAddCounter());
      expect(state).to.deep.equal(result);
    });

    it('should handle TICK', () => {
      const prevState = { tick: 1, count: 25 };
      const result = { ...prevState, tick: 20 };
      const state = reducer(prevState, actions.doSetTick(20));
      expect(state).to.deep.equal(result);
    });

  });
});

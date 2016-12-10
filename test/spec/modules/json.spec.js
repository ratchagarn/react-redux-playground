/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Test - module - json
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import reducer, {
  initialState,
  actionCreators as actions,
  actionTypes as types
} from 'modules/json';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


/**
 * --------------------------------------------------------
 * Spec - module - json
 * --------------------------------------------------------
 */
describe('Module - json', function() {

  /**
   * Action creators
   * --------------------------------------------------------
   */
  describe('action creators', () => {

    afterEach(() => {
      nock.cleanAll();
    });

    it('should creates Json/READY when fetching data has been done', function(done) {
      // FIXME: How to use it??
      // nock('https://jsonplaceholder.typicode.com/')
      //   .get('/posts/1')
      //   .reply(200, { body: { todos: ['do something'] }})

      const expectedActions = [
        { type: types.LOADING, status: 'loading' },
        { type: types.READY, status: 'ready' },
        { type: types.SET_DATA, data: null }
      ]
      const store = mockStore({ todos: [] })

      store.dispatch(actions.doRequestData('posts/1'))
        .then(function(resp) {
          expectedActions[2].data = resp;
          expect(store.getActions()).to.deep.equal(expectedActions);
          done();
        });
    });

    it('should create an action to set data', () => {
      const expectedAction = {
        type: types.SET_DATA,
        data: { a: 1, b: 2, c: 3 }
      };
      const result = actions.doSetData(expectedAction.data);

      expect(result).to.deep.equal(expectedAction);
    });

    it('should create an action to set path', () => {
      const expectedAction = {
        type: types.SET_END_POINT_PATH,
        path: 'get/some/data/1'
      };
      const result = actions.doSetPath(expectedAction.path);

      expect(result).to.deep.equal(expectedAction);
    });

    it('should create an action to set status to ready', () => {
      const expectedAction = {
        type: types.READY,
        status: 'ready'
      };
      expect(actions.doStatusToReady()).to.deep.equal(expectedAction);
    });

    it('should create an action to set status to loading', () => {
      const expectedAction = {
        type: types.LOADING,
        status: 'loading'
      };
      expect(actions.doStatusToLoading()).to.deep.equal(expectedAction);
    });
  });

  /**
   * Reducers
   * --------------------------------------------------------
   */
  describe('reducers', () => {
    // it('should return the initial state', () => {
    //   const state = reducer(undefined, {});
    //   expect(state).to.deep.equal(initialState);
    // });
    //
    // it('should handle ADD', () => {
    //   let prevState, state, result;
    //
    //   prevState = { tick: 1, count: 10 };
    //   result = { ...prevState, count: 11 };
    //   state = reducer(prevState, actions.doAddCounter());
    //   expect(state).to.deep.equal(result);
    //
    //   prevState = { tick: 4, count: 34 };
    //   result = { ...prevState, count: 38 };
    //   state = reducer(prevState, actions.doAddCounter());
    //   expect(state).to.deep.equal(result);
    // });
    //
    // it('should handle TICK', () => {
    //   const prevState = { tick: 1, count: 25 };
    //   const result = { ...prevState, tick: 20 };
    //   const state = reducer(prevState, actions.doSetTick(20));
    //   expect(state).to.deep.equal(result);
    // });
  });
});

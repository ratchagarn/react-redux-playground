/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Test - module - json
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { baseEndpointUrl } from 'cores/config';

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

    it('should creates Json/SUCCESS when fetching data has been done', function(done) {
      // mocking request
      const mockData = { mockRequest: 'success' };
      nock(baseEndpointUrl)
        .get('/posts/1')
        .reply(200, mockData);

      const expectedActions = [
        { type: types.LOADING, status: 'loading' },
        { type: types.SUCCESS, status: 'success', data: mockData }
      ];
      const store = mockStore({});

      store.dispatch(actions.doRequestData('posts/1'))
        .then(function(resp) {
          expect(store.getActions()).to.deep.equal(expectedActions);
          done();
        });
    });

    it('should creates Json/FAILURE when fetching data has been failure', function(done) {
      // mocking request
      const mockData = 'Error: Not found !';
      nock(baseEndpointUrl)
        .get('/posts/1')
        .reply(404, mockData);

      const expectedActions = [
        { type: types.LOADING, status: 'loading' },
        { type: types.FAILURE, status: 'failure', data: mockData }
      ];
      const store = mockStore({});

      store.dispatch(actions.doRequestData('posts/1'))
        .then(function(resp) {
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
    const prevState = { status: 'ready', path: 'posts/1', data: null };

    it('should return the initial state', () => {
      const state = reducer(undefined, {});
      expect(state).to.deep.equal(initialState);
    });

    it('should handle SET_DATA', () => {
      const result = { ...prevState, data: { test: 'OK' } };
      const state = reducer(prevState, actions.doSetData({ test: 'OK' }));
      expect(state).to.deep.equal(result);
    });

    it('should handle SET_END_POINT_PATH', () => {
      const result = { ...prevState, path: 'posts/123' };
      const state = reducer(prevState, actions.doSetPath('posts/123'));
      expect(state).to.deep.equal(result);
    });

    it('should handle READY', () => {
      const result = { ...prevState, status: 'ready' };
      const state = reducer(prevState, actions.doStatusToReady());
      expect(state).to.deep.equal(result);
    });

    it('should handle LOADING', () => {
      const result = { ...prevState, status: 'loading' };
      const state = reducer(prevState, actions.doStatusToLoading());
      expect(state).to.deep.equal(result);
    });

    it('should handle SUCCESS', () => {
      const result = { ...prevState, status: 'success', data: 'Success' };
      const state = reducer(prevState, actions.doStatusToSuccess('Success'));
      expect(state).to.deep.equal(result);
    });

    it('should handle FAILURE', () => {
      const result = { ...prevState, status: 'failure', data: 'Failure' };
      const state = reducer(prevState, actions.doStatusToFailure('Failure'));
      expect(state).to.deep.equal(result);
    });
  });
});

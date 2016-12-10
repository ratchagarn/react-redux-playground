/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Moduels - json
 * ---
 * Fake Online REST API for Testing and Prototyping
 * https://Json.typicode.com/
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { baseEndpointUrl } from 'cores/config';
import fetch from 'isomorphic-fetch';


/**
 * --------------------------------------------------------
 * Initialize state
 * --------------------------------------------------------
 */
export const initialState = {
  status: 'ready', // (ready|loading)
  path: 'posts/1',
  data: null
};


/**
 * --------------------------------------------------------
 * Action types
 * --------------------------------------------------------
 */
export const actionTypes = {
  SET_DATA:           'Json/SET_DATA',
  SET_END_POINT_PATH: 'Json/SET_END_POINT_PATH',
  FETCH:              'Json/FETCH',
  READY:              'Json/READY',
  LOADING:            'Json/LOADING'
};


/**
 * --------------------------------------------------------
 * Reducer
 * --------------------------------------------------------
 */
export default function reducer(state = initialState, action) {

  switch (action.type) {

    case actionTypes.SET_DATA:
      return {
        ...state,
        data: action.data
      };

    case actionTypes.SET_END_POINT_PATH:
      return {
        ...state,
        path: action.path
      };

    case actionTypes.READY:
      return {
        ...state,
        status: action.status
      };

    case actionTypes.LOADING:
      return {
        ...state,
        status: action.status
      };

    default:
      return state;
  }
}


/**
 * --------------------------------------------------------
 * Action creators
 * --------------------------------------------------------
 */
export const actionCreators = {
  doRequestData,
  doSetPath,
  doSetData,
  doStatusToReady,
  doStatusToLoading
};

/**
 * Request data from API
 *
 * @param {string} path - api path for request.
 *
 * @return {object} action for dispatch.
 */
export function doRequestData(path = '') {
  const endpoint = `${baseEndpointUrl}/${path}`;

  return (dispatch) => {
    dispatch(doStatusToLoading());
    return fetch(endpoint)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      dispatch(doStatusToReady());
      dispatch(doSetData(data));
      return data;
    });
  };
}

/**
 * Set data
 *
 * @param {object} data - data.
 *
 * @return {object} action for dispatch.
 */
export function doSetData(data) {
  return {
    type: actionTypes.SET_DATA,
    data
  };
}

/**
 * Set api endpoint path
 *
 * @param {string} path - path for api endpoint.
 *
 * @return {object} action for dispatch.
 */
export function doSetPath(path) {
  return {
    type: actionTypes.SET_END_POINT_PATH,
    path
  };
}

/**
 * Set status to ready
 *
 * @return {object} action for dispatch.
 */
export function doStatusToReady() {
  return {
    type: actionTypes.READY,
    status: 'ready'
  };
}

/**
 * Set status to loading
 *
 * @return {object} action for dispatch.
 */
export function doStatusToLoading() {
  return {
    type: actionTypes.LOADING,
    status: 'loading'
  };
}

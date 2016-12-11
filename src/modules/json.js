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
  status: 'ready', // (loading|success|failure)
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
  READY:              'Json/READY',
  LOADING:            'Json/LOADING',
  SUCCESS:            'Json/SUCCESS',
  FAILURE:            'Json/FAILURE'
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
    case actionTypes.LOADING:
      return {
        ...state,
        status: action.status
      };

    case actionTypes.SUCCESS:
    case actionTypes.FAILURE:
      return {
        ...state,
        status: action.status,
        data: action.data
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
  doStatusToLoading,
  doStatusToSuccess,
  doStatusToFailure
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
      if (!resp.ok) {
        throw new Error('Not found !').toString();
      }
      return resp.json();
    })
    .then((data) => {
      dispatch(doStatusToSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(doStatusToFailure(error));
      return error;
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

/**
 * Set status to success
 *
 * @param {object} data - data from api.
 *
 * @return {object} action for dispatch.
 */
export function doStatusToSuccess(data) {
  return {
    type: actionTypes.SUCCESS,
    status: 'success',
    data
  };
}

/**
 * Set status to failure
 *
 * @param {object} data - error data.
 *
 * @return {object} action for dispatch.
 */
export function doStatusToFailure(data) {
  return {
    type: actionTypes.FAILURE,
    status: 'failure',
    data
  };
}

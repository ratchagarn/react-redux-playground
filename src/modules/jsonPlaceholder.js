/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Moduels - json placeholder
 * ---
 * Fake Online REST API for Testing and Prototyping
 * https://jsonplaceholder.typicode.com/
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

/**
 * --------------------------------------------------------
 * Initialize state
 * --------------------------------------------------------
 */
export const initialState = {
  status: 'ready', // (ready|loading)
  data: null,
  output: ''
};


/**
 * --------------------------------------------------------
 * Action types
 * --------------------------------------------------------
 */
export const actionTypes = {
  SET_DATA:   'JsonPlaceholder/SET_DATA',
  SET_OUTPUT: 'JsonPlaceholder/SET_OUTPUT',
  FETCH:      'JsonPlaceholder/FETCH',
  READY:      'JsonPlaceholder/READY',
  LOADING:    'JsonPlaceholder/LOADING'
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

    case actionTypes.SET_OUTPUT:
      return {
        ...state,
        output: action.output
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
  doSetData,
  doSetOutput,
  doStatusToReady,
  doStatusToLoading
};

/**
 * Request data from API
 *
 * @return {object} action for dispatch.
 */
export function doRequestData() {
  return (dispatch) => {
    dispatch(doStatusToLoading());
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((resp) => resp.json())
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
 * Set output
 *
 * @param {string} output - output content.
 *
 * @return {object} action for dispatch.
 */
export function doSetOutput(output) {
  return {
    type: actionTypes.SET_OUTPUT,
    output
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

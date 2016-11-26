/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Helper - store/createReducer
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

/**
 * Helper for create reducer
 *
 * @param  {any} initialState - initial state for reducer.
 * @param  {object} handlers  - handlers for reducer.
 *
 * @return {function} reducer function.
 *
 * @example
  const todos = createReducer([], {
    [ActionTypes.ADD_TODO](state, action) {
      let text = action.text.trim()
      return [ ...state, text ]
    }
  })
 */
export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }
    else {
      return state
    }
  }
}

/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Application
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

// application component
import AppContainer from './containers/AppContainer';
import Login from 'components/Login';

/**
 * Create application
 *
 * @param {string} mountNodeId - mount node id.
 * @param {object} store       - redux store.
 * @param {object} history     - react router history.
 */
export function render(mountNodeId, store, history) {
  const mountNode = document.getElementById(mountNodeId);

  // don't do anything if mount node not found.
  if (!mountNode) {
    return null;
  }

  // render application
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/login" component={Login} onEnter={onLoginEnter} />
        <Route path="/(:path)" component={AppContainer} onEnter={onAppEnter} />
      </Router>
    </Provider>,
    mountNode
  );


  function onLoginEnter(nextState, replace) {
    const { authenticated } = store.getState().auth;
    if (authenticated) {
      replace('/');
    }
  }

  function onAppEnter(nextState, replace) {
    const { authenticated } = store.getState().auth;
    if (!authenticated && nextState.location.pathname !== '/') {
      replace('/login');
    }
  }
}

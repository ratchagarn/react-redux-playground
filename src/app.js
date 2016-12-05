/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Application
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

// container
import Layout from 'containers/Layout';

// components
import {
  Counter,
  Home,
  Json,
  Login,
} from 'components';


/**
 * Render application
 *
 * @param {string} mountNodeId - mount node id.
 * @param {object} store       - redux store.
 * @param {object} history     - react router history.
 */
export function renderApp(mountNodeId, store, history) {
  const mountNode = document.getElementById(mountNodeId);

  // don't do anything if mount node not found.
  if (!mountNode) {
    return null;
  }

  // render application
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/login" component={Login} onEnter={onLoginEnter}></Route>
        <Route path="/" component={Layout} onEnter={onAppEnter}>
          <IndexRoute component={Home} />
          <Route path="counter" component={Counter}/>
          <Route path="json" component={Json}/>
        </Route>
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
    if (!authenticated) {
      replace('/login');
    }
  }
}

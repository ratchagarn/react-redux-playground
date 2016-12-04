/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Main Application
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import 'styles/main.scss';

import 'babel-polyfill';
import 'cores/config';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './cores/getStore';

// rounter
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// base container component
import App from './containers/App';
import Login from 'components/Login';


/**
 * --------------------------------------------------------
 * Mount application
 * --------------------------------------------------------
 */
const mountNode = document.getElementById('app');
if (mountNode) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/login" component={Login} onEnter={onLoginEnter} />
        <Route path="/(:path)" component={App} onEnter={onAppEnter} />
      </Router>
    </Provider>,
    mountNode
  );
}

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

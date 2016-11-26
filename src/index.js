/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Main Application
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore } from 'redux';

import rootReducer from 'cores/rootReducer';

// base container component
import App from './containers/App';


/**
 * --------------------------------------------------------
 * Create store
 * --------------------------------------------------------
 */
const store = createStore(rootReducer);


/**
 * --------------------------------------------------------
 * Mount application
 * --------------------------------------------------------
 */
const mountNode = document.getElementById('app');
if (mountNode) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    mountNode
  );
}

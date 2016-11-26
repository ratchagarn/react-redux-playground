/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Main Application
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStoreForApp } from 'helpers/store';

// reducers
import moduleCounterReducer from 'modules/counter';
import moduleTimerReducer from 'modules/timer';

// base container component
import App from './containers/App';


/**
 * --------------------------------------------------------
 * Create store
 * --------------------------------------------------------
 */
const store = createStoreForApp({
  counter: moduleCounterReducer,
  timer: moduleTimerReducer
});


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

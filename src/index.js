/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Main Application
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import 'styles/app.scss';

import 'babel-polyfill';
import 'cores/config';

import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './cores/configureStore';

import { renderApp } from './app.js';

const history = syncHistoryWithStore(browserHistory, store);

renderApp('app', store, history);

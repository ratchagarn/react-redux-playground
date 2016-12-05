/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Main Application
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import 'styles/main.scss';

import 'babel-polyfill';
import 'cores/config';

import store from './cores/configureStore';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { render } from './app.js';

const history = syncHistoryWithStore(browserHistory, store);

// render application
render('app', store, history);

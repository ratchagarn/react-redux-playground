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

import { render } from './app.js';

const history = syncHistoryWithStore(browserHistory, store);

// render application
render('app', store, history);

/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - JsonPlaceholder/index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { connect } from 'react-redux';

import './Login.scss';
import Login from './Login.js';

export default connect((state) => {
  return {
    auth: state.auth
  };
})(Login);

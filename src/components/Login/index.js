/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Json/index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { connect } from 'react-redux';

import './Login.scss';
import Login from './Login.js';

export default connect()(Login);
export {
  Login
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

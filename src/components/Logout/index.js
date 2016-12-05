/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Json/index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { connect } from 'react-redux';

import Logout from './Logout.js';

export default connect((state) => {
  return {
    auth: state.auth
  };
})(Logout);

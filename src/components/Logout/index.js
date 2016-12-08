/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Json/index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { connect } from 'react-redux';

import Logout from './Logout.js';

export default connect(mapStateToProps)(Logout);
export {
  Logout
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

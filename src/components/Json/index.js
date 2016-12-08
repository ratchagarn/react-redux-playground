/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Json/index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import './Json.scss';
import Json from './Json';

import { connect } from 'react-redux';

export default connect(mapStateToProps)(Json);
export {
  Json
}

function mapStateToProps(state) {
  const { status, path, data } = state.json;

  return {
    status,
    path,
    data
  };
}

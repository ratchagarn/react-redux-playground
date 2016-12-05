/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Json/index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import './Json.scss';
import Json, { PropTypes } from './Json';

import { connect } from 'react-redux';

export default connect(mapStateToProps)(Json);

/**
 * Mapping state to component props
 *
 * @param {state} state - state from store.
 *
 * @return {object} props for component.
 */
function mapStateToProps(state) {
  const componentProps = {};
  for (const name in PropTypes) {
    componentProps[name] = state.json[name];
  }

  return componentProps;
}

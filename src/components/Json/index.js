/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Json/index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import './Json.scss';
import Json, { propTypes } from './Json';

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
  for (const name in propTypes) {
    componentProps[name] = state.json[name];
  }

  return componentProps;
}

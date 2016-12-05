/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Counter/index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import './Counter.scss';
import Counter from './Counter';

import { connect } from 'react-redux';

export default connect(mapStateToProps)(Counter);

/**
 * Mapping state to component props
 *
 * @param {state} state - state from store.
 *
 * @return {object} props for component.
 */
function mapStateToProps(state) {
  const { count, tick } = state.counter;

  return {
    count,
    tick
  };
}

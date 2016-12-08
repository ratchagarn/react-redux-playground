/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Counter/index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import './Counter.scss';
import { connect } from 'react-redux';

import Counter from './Counter';

export default connect(mapStateToProps)(Counter);
export {
  Counter
}

function mapStateToProps(state) {
  const { count, tick } = state.counter;

  return {
    count,
    tick
  };
}

/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Counter/index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { connect } from 'react-redux';

import './Counter.scss';
import Counter from './Counter.js';

export default connect((state) => {

  const { count, tick } = state.counter;

  return {
    count,
    tick
  };
})(Counter);

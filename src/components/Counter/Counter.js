/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Counter
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actionCreators } from 'modules/counter';

export default connect()(Counter);

/**
 * Prop types
 * --------------------------------------------------------
 */
Counter.PropTypes = {
  count: React.PropTypes.number
};


/**
 * --------------------------------------------------------
 * Stateless component
 * --------------------------------------------------------
 */
function Counter({ count, tick, dispatch }) {

  const actions = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="counter-component">
      <p>
        Tick:
        <input type="text"
               defaultValue={tick}
               onChange={(e) => actions.addTick(e.target.value)} />
      </p>
      <button onClick={() => actions.addCounter()}>Click Me !</button>
      <span className="counter">{count}</span>
    </div>
  );
}

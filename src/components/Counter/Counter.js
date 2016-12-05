/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Counter
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';
import { bindActionCreators } from 'redux';

import { actionCreators } from 'modules/counter';

export default Counter;

/**
 * Prop types
 * --------------------------------------------------------
 */
Counter.PropTypes = {
  count: React.PropTypes.number.isRequired,
  tick:  React.PropTypes.number
};


/**
 * --------------------------------------------------------
 * Stateless component
 * --------------------------------------------------------
 */
function Counter({ count, tick, dispatch }) {

  const actions = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="component-counter">
      <label>Increase:</label>
      <input type="text"
             defaultValue={tick}
             onChange={(e) => actions.doAddTick(e.target.value)} />
      <button className="add-button"
              onClick={() => actions.doAddCounter()}>Add Counter - {count}</button>
    </div>
  );
}

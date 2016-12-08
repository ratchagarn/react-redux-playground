/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Counter
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React, { PropTypes } from 'react';
import { doAddCounter, doSetTick } from 'modules/counter';


export default Counter;

/**
 * Prop types
 * --------------------------------------------------------
 */
Counter.PropTypes = {
  count: PropTypes.number.isRequired,
  tick:  PropTypes.number
};


/**
 * --------------------------------------------------------
 * Stateless component
 * --------------------------------------------------------
 */
function Counter({ count, tick, dispatch }) {

  return (
    <div className="component-counter">
      <label>Increase:</label>
      <input type="text"
             className="set-tick-input"
             defaultValue={tick}
             onChange={(e) => dispatch(doSetTick(e.target.value))} />
      <button className="add-button"
              onClick={() => dispatch(doAddCounter())}>Add Counter - {count}</button>
    </div>
  );
}

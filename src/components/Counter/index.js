/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Counter
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import './Counter.scss';
import React from 'react';

import { addCounter } from 'modules/counter';
import { getDispatch } from 'helpers/store';

export default Counter;

/**
 * Prop type
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
function Counter({ count, tick, onClick, onTick }) {

  return (
    <div className="counter-component">
      <p>
        Tick:
        <input type="text"
               defaultValue={tick}
               onChange={(e) => onTick(e.target.value)} />
      </p>
      <button onClick={() => getDispatch()(addCounter())}>Click Me !</button>
      <span className="counter">{count}</span>
    </div>
  );
}

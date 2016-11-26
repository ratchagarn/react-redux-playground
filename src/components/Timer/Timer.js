/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Timer
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';


export default Timer;

/**
 * Prop type
 * --------------------------------------------------------
 */
Timer.PropTypes = {
  time:    React.PropTypes.number.isRequired,
  status:  React.PropTypes.string.isRequired,
  onStart: React.PropTypes.func.isRequired,
  onStop:  React.PropTypes.func.isRequired
};


const _buttonText = {
  start: 'Stop',
  stop: 'Start'
};

let _timer = null;
const _delay = 50;

/**
 * --------------------------------------------------------
 * Stateless component
 * --------------------------------------------------------
 */
function Timer({ time, status, onStart, onStop, onSet }) {

  const buttonText = _buttonText[status];

  return (
    <div className="timer-component">
      <p className="time">{time}</p>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );


  function onClick() {

    if (status === 'stop') {
      onStart();
      _timer = setInterval(() => {
        onSet(1);
      }, _delay);
    }
    else {
      onStop();
      clearInterval(_timer);
    }

  }
}

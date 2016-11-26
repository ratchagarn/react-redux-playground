/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Container APP
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import { IF } from 'components/Helpers';
import Counter from 'components/Counter';
import Timer from 'components/Timer';

import { Link } from 'react-router';

// modules
import { timerStart, timerStop, timerSetTime } from 'modules/timer';


class App extends Component {

  render() {
    const {
      params,
      onCounterAdd,
      onCounterIncreateTick,
      onTimerStart,
      onTimerStop,
      onTimerSetTime
    } = this.props;

    const {
      count,
      tick
    } = this.props.counter;

    const {
      time,
      status
    } = this.props.timer;


    return (
      <div className="ApplicationMain">
        <ul className="main-nav">
          <li><Link to="counter" activeClassName="active">Counter</Link></li>
          <li><Link to="timer" activeClassName="active">Timer</Link></li>
        </ul>
        <IF condition={params.path === 'counter'}>
          <Counter
            count={count}
            tick={tick} />
        </IF>
        <IF condition={params.path === 'timer'}>
          <Timer
            time={time}
            status={status}
            onStart={onTimerStart}
            onStop={onTimerStop}
            onSet={onTimerSetTime} />
        </IF>
      </div>
    );
  };
}


function mapStateToProps(state) {
  return {
    counter: state.counter,
    timer: state.timer
  };
}

const mapDispatchToProps = {
  onTimerStart: timerStart,
  onTimerStop: timerStop,
  onTimerSetTime: timerSetTime,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

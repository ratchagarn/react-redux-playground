/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Container APP
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from 'components/Counter';
import Timer from 'components/Timer';
import { addCounter, addTick } from 'modules/counter';
import { timerStart, timerStop, timerSetTime } from 'modules/timer';


class App extends Component {

  render() {
    const {
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
        <Counter
          count={count}
          tick={tick}
          onClick={onCounterAdd}
          onTick={onCounterIncreateTick} />
        <Timer
          time={time}
          status={status}
          onStart={onTimerStart}
          onStop={onTimerStop}
          onSet={onTimerSetTime} />
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
  onCounterAdd: addCounter,
  onCounterIncreateTick: addTick,
  onTimerStart: timerStart,
  onTimerStop: timerStop,
  onTimerSetTime: timerSetTime,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

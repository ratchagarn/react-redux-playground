/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Container APP
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import classNames from 'classNames';

// components
import { IF } from 'components/Helpers';
import Counter from 'components/Counter';
import Timer from 'components/Timer';
import JsonPlaceholder from 'components/JsonPlaceholder';

import { Link } from 'react-router';

// modules
import { timerStart, timerStop, timerSetTime } from 'modules/timer';
import { doSetAuthFailure } from 'modules/auth';


class App extends Component {

  constructor() {
    super();
    this.onLogout = this.onLogout.bind(this);
  }

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

    const { authenticated } = this.props.auth;
    const jsonPlaceholder = this.props.jsonPlaceholder;

    const authStatusClassName = classNames('auth-status', {
      success: authenticated,
      failure: !authenticated
    });

    return (
      <div className="ApplicationMain">
        <div className={authStatusClassName}>
          Authention status: <span>{authenticated.toString()}</span>
        </div>
        <ul className="main-nav">
          <IF condition={!authenticated}>
            <li><Link to="login" activeClassName="active">Login</Link></li>
          </IF>
          <IF condition={authenticated}>
            <li><a href="#" onClick={this.onLogout}>Logout</a></li>
          </IF>
          <li><Link to="counter" activeClassName="active">Counter</Link></li>
          <li><Link to="timer" activeClassName="active">Timer</Link></li>
          <li><Link to="json" activeClassName="active">Json</Link></li>
        </ul>

        <IF condition={params.path === 'json'}>
          <JsonPlaceholder
            status={jsonPlaceholder.status}
            data={jsonPlaceholder.data} />
        </IF>

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
  }

  onLogout(event) {
    event.preventDefault();
    if (confirm('Are you sure ?')) {
      this.props.router.replace('/');
      this.props.doSetAuthFailure();
    }
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth,
    counter: state.counter,
    timer: state.timer,
    jsonPlaceholder: state.jsonPlaceholder
  };
}

const mapDispatchToProps = {
  onTimerStart: timerStart,
  onTimerStop: timerStop,
  onTimerSetTime: timerSetTime,
  doSetAuthFailure
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

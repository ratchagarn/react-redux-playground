/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Login
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';
import { connect } from 'react-redux';

import { v4 } from 'uuid';

import { doSetAuthSuccess } from 'modules/auth';

export default connect((state) => {
  return {
    auth: state.auth
  };
})(Login);

/**
 * Prop types
 * --------------------------------------------------------
 */
Login.PropTypes = {};


const _rootId = `login-${v4()}`;

/**
 * --------------------------------------------------------
 * Stateless component
 * --------------------------------------------------------
 */
function Login({ auth, dispatch, router }) {

  return (
    <div id={_rootId} className="component-login">
      <h3>Login</h3>
      <button className="sign-in-button" onClick={onSignIn}>Sign In !</button>
    </div>
  );

  function onSignIn() {
    dispatch(doSetAuthSuccess());
    const btn = document.getElementById(_rootId).querySelector('button');
    btn.innerHTML = 'Process... .. .. .';
    btn.setAttribute('disabled', true);
    setTimeout(() => router.replace('/'), 1500);
  }
}

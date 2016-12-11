/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Login
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';

import { v4 } from 'uuid';
import { doSetAuthSuccess } from 'modules/auth';

import { createAuthCookieStatus } from 'helpers/utils/cookie';


export default Login;

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
    <div id={_rootId} className="login-form">
      <h3 className="login-form-title">Login</h3>
      <div className="login-form-block">
        <label>Username</label>
        <input type="text" placeholder="Your username" defaultValue="ReactAppPlayGround" />
      </div>

      <div className="login-form-block">
        <label>Password</label>
        <input type="password" placeholder="Your password" defaultValue="password" />
      </div>
      <button className="login-form-submit" onClick={onSignIn}>Sign In !</button>
    </div>
  );

  function onSignIn() {
    dispatch(doSetAuthSuccess());
    const btn = document.getElementById(_rootId).querySelector('button');
    btn.innerHTML = 'Process...';
    btn.setAttribute('disabled', true);

    // store auth staus in cookie, for skip login next time.
    createAuthCookieStatus();

    // redirect to home page
    setTimeout(() => router.replace('/'), 250);
  }
}

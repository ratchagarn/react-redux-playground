/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Login
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';
import { Link, browserHistory } from 'react-router';

import { doSetAuthFailure } from 'modules/auth';

import { removeAuthCookieStatus } from 'helpers/utils/cookie';


export default Logout;

/**
 * Prop types
 * --------------------------------------------------------
 */
export const PropTypes = {
  backTo: React.PropTypes.string.isRequired,
  auth:   React.PropTypes.object.isRequired
};

Logout.PropTypes = PropTypes;


/**
 * --------------------------------------------------------
 * Stateless component
 * --------------------------------------------------------
 */
function Logout(props) {

  const {
    backTo,
    auth,
    children,
    dispatch,
    ...remainProps
  } = props;


  return (
    <Link href="#"
          onClick={onClick}
          {...remainProps}>
      {children}
    </Link>
  );

  function onClick(event) {
    event.preventDefault();
    dispatch(doSetAuthFailure());

    // remove cookie auth status
    removeAuthCookieStatus();

    // browserHistory.replace(backTo) // it doesn't work as expected.
    window.location.href = backTo;
  }
}

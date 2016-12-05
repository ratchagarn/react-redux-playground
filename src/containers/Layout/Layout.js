/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Container - Layout
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';
import { Link, IndexLink } from 'react-router';

import Logout from 'components/Logout';


/**
 * --------------------------------------------------------
 * Statelesss component create layout
 * --------------------------------------------------------
 */
export default function Layout({ children }) {

  // build main menu
  const mainMenuNav = buildMainMenuNav([
    { name: 'Counter', to: '/counter' },
    { name: 'Json',    to: '/json' },
  ]);

  return (
    <div className="root-application">
      <header className="rap-header">
        <h1>
          <Link to="/">React app Playground</Link>
        </h1>
      </header>

      <nav className="rap-main-nav">
        <ul>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          {mainMenuNav}
          <li><Logout backTo="/" className="xxxx">Logout</Logout></li>
        </ul>
      </nav>

      <section className="rap-main-body">
        {children}
      </section>
    </div>
  );

  /**
   * Build main menu navigator
   *
   * @param {array} menus - menu list.
   *
   * @return {object} react template
   */
  function buildMainMenuNav(menus) {
    return menus.map((item) => {
      return (
        <li key={item.name}>
          <Link to={item.to} activeClassName="active">{item.name}</Link>
        </li>
      );
    });
  }
}

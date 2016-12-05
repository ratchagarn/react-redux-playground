/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Container - Layout
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';
import { Link, browserHistory } from 'react-router';

export default function Layout({ children }) {

  // build main menu
  const mainMenuNav = buildMainMenuNav([
    { name: 'Login', to: '/login' },
    { name: 'Counter', to: '/counter' }
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
          {mainMenuNav}
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

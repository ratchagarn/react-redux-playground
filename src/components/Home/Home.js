/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Counter
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';

export default Home;

/**
 * Prop types
 * --------------------------------------------------------
 */
Home.PropTypes = {};


/**
 * --------------------------------------------------------
 * Stateless component
 * --------------------------------------------------------
 */
function Home(props) {
  return (
    <section className="home-page">
      <p className="welcome">Welcome to React app playground example</p>
    </section>
  );
}

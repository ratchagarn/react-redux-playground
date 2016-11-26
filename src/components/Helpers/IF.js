/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Helpers - IF
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';


export default IF;

/**
 * Prop types
 * --------------------------------------------------------
 */
IF.PropTypes = {
  condition: React.PropTypes.bool,
};


/**
 * --------------------------------------------------------
 * Stateless component
 * --------------------------------------------------------
 */
function IF({ condition, children }) {
  let output = null;

  if (condition === true) {
    output = children;
  }

  return output;
}

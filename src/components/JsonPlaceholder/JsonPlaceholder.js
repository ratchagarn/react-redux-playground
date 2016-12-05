/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - JsonPlaceholder
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';
import { connect } from 'react-redux';

import { doRequestData, doSetOutput } from 'modules/jsonPlaceholder';

export default connect()(JsonPlaceholder);

/**
 * Prop types
 * --------------------------------------------------------
 */
JsonPlaceholder.PropTypes = {};


/**
 * --------------------------------------------------------
 * Stateless component
 * --------------------------------------------------------
 */
function JsonPlaceholder({ status, data, dispatch }) {
  let output = '';
  if (data) {
    output = JSON.stringify(data);
  }

  let loadingText = '';
  if (status === 'loading') {
    loadingText = <p>Request data from API...</p>;
  }

  return (
    <div className="component-json-placeholder">
      {loadingText}
      <div className="body">
        <select>
          <option value="posts/1">posts/1</option>
        </select>
        <button onClick={onClick}>Run</button>
        <pre>{output}</pre>
      </div>
    </div>
  );


  function onClick() {
    dispatch(doRequestData());
  }
}

/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - JsonPlaceholder
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';
import { connect } from 'react-redux';

import { IF } from 'components/Helpers';
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

  return (
    <div className="component-json-placeholder">
      <IF condition={status === 'loading'}>
        <p>Request data from API...</p>
      </IF>
      <IF condition={status === 'ready'}>
        <div className="body">
          <select>
            <option value="posts/1">posts/1</option>
          </select>
          <button onClick={onClick}>Run</button>
          <pre>{output}</pre>
        </div>
      </IF>
    </div>
  );


  function onClick() {
    dispatch(doRequestData());
  }
}

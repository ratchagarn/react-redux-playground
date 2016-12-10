/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Helper - setup test
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';


/**
 * Setup component for test.
 *
 * @param  {bject} store           - redux store.
 * @param  {bject} Components      - react component for test.
 * @param  {bject} reducerName     - store reducer name.
 * @param  {bject} defaultProps    - default props for component.
 * @param  {bject} extractElements - helper for extract element from view.
 *
 * @return {function} setup function for render component to test
 *
 * @example
setupTest(store, Counter, 'counter', {
  tick: 1,
  count: 0
}, {
  rootElement: '.component-counter',
  inputSetTick: '.set-tick-input',
  buttonAdd: '.add-button'
});
 */
export default function setupTest(store, Component, reducerName, defaultProps, extractElements) {

  /**
   * Setup function
   *
   * @param  {object} propOverrides - prop for override when render component.
   *
   * @return {object} uliity for helping test.
   */
  return (propOverrides) => {

    const props = Object.assign(defaultProps, propOverrides);
    props.dispatch = store.dispatch;

    const wrapper = shallow(
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    ).shallow();

    const els = extractElementFromWrapper(wrapper, extractElements);

    return {
      ...els,
      wrapper,
      props,
      updateTestView,
      getState: () => store.getState()[reducerName]
    };
  }

  /**
   * Helper function for get update view with current state.
   *
   * @return {Object} - ulitity for helping test.
   */
  function updateTestView() {
    const props = store.getState()[reducerName];
    const wrapper = shallow(
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    ).shallow();

    const els = extractElementFromWrapper(wrapper, extractElements);

    return {
      ...els,
      wrapper,
      props
    };
  }
}


/**
 * Helper for extract element from wrapper
 *
 * @param {object} wrapper - enzyme wrapper.
 * @param {object} data    - extrat data.
 *
 * @return {object} extract elements.
 */
function extractElementFromWrapper(wrapper, data) {
  const els = {};
  for (const name in data) {
    els[name] = wrapper.find(data[name]);
  }
  return els;
}

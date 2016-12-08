/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Test - component - Counter with store
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { expect } from 'chai';

import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import Counter from 'components/Counter/Counter';
import { doAddCounter, doSetTick } from 'modules/counter';

import store from 'cores/configureStore';


function setup(propOverrides) {
  const props = Object.assign({
    tick: 1,
    count: 0
  }, propOverrides);

  props.dispatch = store.dispatch;

  const wrapper = shallow(
    <Provider store={store}>
      <Counter {...props} />
    </Provider>
  ).shallow();

  return {
    wrapper,
    props,
    getState: () => store.getState().counter,
    rootElement:  wrapper.find('.component-counter'),
    setTickInput: wrapper.find('.set-tick-input'),
    addButton:    wrapper.find('.add-button')
  };
}

/**
 * --------------------------------------------------------
 * Spec - component - Counter
 * --------------------------------------------------------
 */
describe.only('Component - Counter', function() {

  it('should render properly', () => {
    const { rootElement, setTickInput, addButton } = setup({
      tick: 5,
      count: 10
    });

    expect(rootElement).to.have.length(1);
    expect(setTickInput).to.have.length(1);
    expect(addButton).to.have.length(1);

    expect(setTickInput.props().defaultValue).to.equal(5);
    expect(addButton.text()).to.equal('Add Counter - 10');
  });

  it('should button event `onClick` work properly', () => {
    const { getState, addButton } = setup();
    expect(typeof addButton.props().onClick).to.equal('function');
    expect(addButton.text()).to.equal('Add Counter - 0');

    addButton.simulate('click');
    expect(getState()).to.deep.equal({
      tick: 1,
      count: 1
    });
  });

  it('should input event `onChange` work properly', () => {
    const { getState, addButton, setTickInput } = setup();
    expect(typeof setTickInput.props().onChange).to.equal('function');

    setTickInput.simulate('change', {
      target: {
        value: 10
      }
    });

    expect(getState()).to.deep.equal({
      tick: 10,
      count: 1
    });
  });

});

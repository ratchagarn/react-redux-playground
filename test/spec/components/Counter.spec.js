/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Test - component - Counter
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { expect } from 'chai';

import React from 'react';
import { shallow } from 'enzyme';

import Counter from 'components/Counter/Counter';
import { actionTypes } from 'modules/counter';

import configureStore from 'redux-mock-store'


function setup(props) {
  const mockStore = configureStore([]);
  const store = mockStore({});

  const defaultProps = {
    tick: 1,
    count: 0,
    dispatch: store.dispatch
  };

  const mergedProps = {
    ...defaultProps,
    ...props
  };

  const wrapper = shallow(<Counter {...mergedProps} />)

  return {
    wrapper,
    store,
    container:    wrapper.find('.component-counter'),
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
    const { container, setTickInput, addButton } = setup({
      tick: 5,
      count: 10
    });

    expect(container).to.have.length(1);
    expect(setTickInput).to.have.length(1);
    expect(addButton).to.have.length(1);

    expect(setTickInput.props().defaultValue).to.equal(5);
    expect(addButton.text()).to.equal('Add Counter - 10');
  });

  it('should button have event `onClick`', () => {
    const { store, addButton } = setup();
    expect(typeof addButton.props().onClick).to.equal('function');

    expect(store.getActions()).to.have.length(0);
    addButton.simulate('click');
    expect(store.getActions()).to.have.length(1);
  });

  it('should input can call `onChange`', () => {
    const { store, setTickInput } = setup();
    expect(typeof setTickInput.props().onChange).to.equal('function');

    expect(store.getActions()).to.have.length(0);
    setTickInput.simulate('change', { target: {} });
    expect(store.getActions()).to.have.length(1);
  });
});

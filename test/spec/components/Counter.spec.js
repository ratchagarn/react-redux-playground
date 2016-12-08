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

import configureStore from 'redux-mock-store';


function setup() {
  const mockStore = configureStore([]);
  const store = mockStore({});
  const { dispatch } = store;

  const props = {
    tick: 1,
    count: 10,
    dispatch
  };

  const enzymeWrapper = shallow(<Counter {...props} />)

  return {
    props,
    enzymeWrapper,
    store
  };
}

/**
 * --------------------------------------------------------
 * Spec - component - Counter
 * --------------------------------------------------------
 */
describe('Component - Counter', function() {

  it('shold render properly', () => {
    const { enzymeWrapper } = setup();
    const container = enzymeWrapper.find('.component-counter');
    const addButton = enzymeWrapper.find('.add-button');

    expect(container).to.have.length(1);
    expect(addButton).to.have.length(1);
    expect(addButton.text()).to.equal('Add Counter - 10');
  });


  it('should call action add counter properly', () => {
    const { enzymeWrapper, store } = setup();
    const addButton = enzymeWrapper.find('.add-button');
    addButton.props().onClick();
    expect(store.getActions()).to.deep.equal([
      {
        type: actionTypes.ADD
      }
    ]);
  });

  it('should call action set tick properly', () => {
    const { enzymeWrapper, store } = setup();
    const setTickInput = enzymeWrapper.find('.set-tick-input');
    setTickInput.simulate('change', {
      target: {
        value: 20
      }
    });

    expect(store.getActions()).to.deep.equal([
      {
        type: actionTypes.TICK,
        tick: 20
      }
    ]);
  });

});

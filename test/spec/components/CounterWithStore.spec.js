/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Test - component - Counter with store
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { expect } from 'chai';

import React from 'react';
import Counter from 'components/Counter/Counter';
import store from 'cores/configureStore';

import { setupTest } from 'test/helpers';


/**
 * --------------------------------------------------------
 * Spec - component - Counter
 * --------------------------------------------------------
 */
describe('Component - Counter', function() {

  beforeEach(() => {
    this.setup = setupTest(store, Counter, 'counter', {
      tick: 1,
      count: 0
    }, {
      rootElement: '.component-counter',
      inputSetTick: '.set-tick-input',
      buttonAdd: '.add-button'
    });
  })


  it('should render properly', () => {
    const { rootElement, inputSetTick, buttonAdd } = this.setup({
      tick: 5,
      count: 10
    });

    expect(rootElement).to.have.length(1);
    expect(inputSetTick).to.have.length(1);
    expect(buttonAdd).to.have.length(1);

    expect(inputSetTick.props().defaultValue).to.equal(5);
    expect(buttonAdd.text()).to.equal('Add Counter - 10');
  });


  it('should button event `onClick` work properly', () => {
    const { getState, buttonAdd, updateTestView } = this.setup();
    buttonAdd.simulate('click');

    const update = updateTestView();
    expect(update.buttonAdd.text()).to.equal('Add Counter - 1');
  });


  it('should input event `onChange` work properly', () => {
    const { getState, buttonAdd, inputSetTick, updateTestView } = this.setup();
    const newTick = 10;

    inputSetTick.simulate('change', {
      target: {
        value: newTick
      }
    });

    const update = updateTestView();
    expect(update.inputSetTick.props().defaultValue).to.equal(newTick);
  });

});

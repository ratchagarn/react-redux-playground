/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Test - component - Counter with store
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { expect } from 'chai';

import React from 'react';
import Counter from 'components/Counter/Counter';
import { doAddCounter, doSetTick } from 'modules/counter';

import store from 'cores/configureStore';

import { setupTest } from 'test/helpers';


/**
 * --------------------------------------------------------
 * Spec - component - Counter
 * --------------------------------------------------------
 */
describe.only('Component - Counter', function() {

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
    expect(typeof buttonAdd.props().onClick).to.equal('function');
    expect(buttonAdd.text()).to.equal('Add Counter - 0');

    buttonAdd.simulate('click');
    expect(getState()).to.deep.equal({
      tick: 1,
      count: 1
    });

    const update = updateTestView();
    expect(update.buttonAdd.text()).to.equal('Add Counter - 1');
  });

  it('should input event `onChange` work properly', () => {
    const { getState, buttonAdd, inputSetTick } = this.setup();
    expect(typeof inputSetTick.props().onChange).to.equal('function');

    inputSetTick.simulate('change', {
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

/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Test - helpers - util:object
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { expect } from 'chai';

import utilObj from 'helpers/utils/object';

/**
 * --------------------------------------------------------
 * Spec - util - object
 * --------------------------------------------------------
 */
describe('Helper - util - object', function() {

  // Merge
  it('`merge` should work properly', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = utilObj.merge(obj, { a: 2 });

    expect(result).to.deep.equal({ a: 2, b: 2, c: 3});
    expect(result).to.not.equal(obj);
  });


  // Clone
  it('`clone` should work properly', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = utilObj.clone(obj);

    expect(result).to.deep.equal(obj);
    expect(result).to.not.equal(obj);

    result.a = 10;
    expect(result).to.not.deep.equal(obj);
  });


  // Clone deep
  it('`deepClone` should work properly', () => {
    const obj = { a: 1, b: 2, c: 3, d: { d1: 11, d2: 22 } };
    const result = utilObj.cloneDeep(obj);

    expect(result).to.deep.equal(obj);
    expect(result).to.not.equal(obj);

    result.a = 10;
    result.d.d1 = 33;
    expect(result).to.not.deep.equal(obj);
  });

});

/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Test - helpers - util:array
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { expect } from 'chai';

import utilArr from 'helpers/utils/array';

/**
 * Spec - util - array
 * --------------------------------------------------------
 */
describe('Helper - util - array', function() {

  // Clone
  it('`clone` should work properly', () => {
    const arr = [1, 2, 3];
    const result = utilArr.clone(arr);

    expect(result).to.not.equal(arr);
    expect(result).to.deep.equal(arr);
  });


  // Clone deep
  it('`cloneDeep` should work properly', () => {
    const arr = [1, { a: 2, b: { bb: 33, cc: 44 } }];
    const result = utilArr.cloneDeep(arr);

    expect(result).to.not.equal(arr);

    expect(result).to.deep.equal(arr);
    expect(result[1].b.cc).to.equal(44);
  });


  // Inert item
  it('`insertItem` should work properly', () => {
    const arr = [1, 2, 3];
    const result = utilArr.insertItem(arr, 4);

    expect(result).to.not.equal(arr);
    expect(result).to.deep.equal([1, 2, 3, 4]);

    const result2 = utilArr.insertItem(result, 99, 2);
    expect(result2).to.not.equal(result);
    expect(result2).to.deep.equal([1, 2, 99, 3, 4]);
  });


  // Remove item
  it('`removeItem` should work properly', () => {
    const arr = [1, 2, 3];
    const result = utilArr.removeItem(arr, 1);

    expect(result).to.not.equal(arr);
    expect(result).to.deep.equal([1, 3]);
    expect(utilArr.removeItem(result, 9)).to.deep.equal([1, 3]);
  });

});

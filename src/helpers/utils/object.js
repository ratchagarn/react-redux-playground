/**
 * --------------------------------------------------------
 * Helpers - util - object
 * --------------------------------------------------------
 */

export default {
  merge,
  clone,
  cloneDeep
};


/**
 * Merge two object
 *
 * @param  {object} target - target object for merge.
 * @param  {object} source - source object.
 *
 * @return {object} object after merge.
 */
export function merge(target, source) {
  return Object.assign({}, target, source);
}


/**
 * Clone object
 *
 * @param {object} target - target object for cloen.
 */
export function clone(target) {
  return Object.assign({}, target);
}


/**
 * Clone deep object
 *
 * @param {object} target - target object for cloen.
 */
export function cloneDeep(target) {
  return JSON.parse(JSON.stringify(target));
}

/**
 * --------------------------------------------------------
 * Helpers - util - arrau
 * --------------------------------------------------------
 */

export default {
  clone,
  cloneDeep,
  insertItem,
  removeItem
};


/**
 * Clone array
 *
 * @param  {array} target - target for clone.
 *
 * @return {array} - array after clone.
 */
export function clone(target) {
  return target.slice();
}


/**
 * Clone deep array
 *
 * @param  {array} target - target for clone deep.
 *
 * @return {array} - array after clone deep.
 */
export function cloneDeep(target) {
  return JSON.parse(JSON.stringify(target));
}


/**
 * Insert array item
 *
 * @param {array} target    - target array for insert item.
 * @param {any} item        - new item for insert.
 * @param {number} insertAt - index position for insert.
 *
 * @return {array} array after insert item.
 */
export function insertItem(target, item, insertAt) {
  const newArr = cloneDeep(target);

  if (typeof insertAt === 'number') {
    newArr.splice(insertAt, 0, item);
  }
  else {
    newArr.push(item);
  }

  return newArr;
}


/**
 * Remove array item
 *
 * @param {array} target    - target array for insert item.
 * @param {number} removeAt - index position for remove.
 *
 * @return {array} array after remove item.
 */
export function removeItem(target, removeAt) {
  return target.filter((item, index) => index !== removeAt);
}

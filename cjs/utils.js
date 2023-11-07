'use strict';
/**
 * @template T
 * @param {T[]} list
 * @returns {Set<T>}
 */
const set = list => {
  const result = new Set;
  for (let i = 0; i < list.length; i++) {
    result.add(list[i]);
    result.add(list[i].toUpperCase());
  }
  return result;
};
exports.set = set;

const re = set => new RegExp(`^(?:${[...set].join('|')})$`, 'i');
exports.re = re;

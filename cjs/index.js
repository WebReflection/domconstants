'use strict';
/*! (c) Andrea Giammarchi - ISC */

const ELEMENT_NODE = 1;
exports.ELEMENT_NODE = ELEMENT_NODE;
const ATTRIBUTE_NODE = 2;
exports.ATTRIBUTE_NODE = ATTRIBUTE_NODE;
const TEXT_NODE = 3;
exports.TEXT_NODE = TEXT_NODE;
const COMMENT_NODE = 8;
exports.COMMENT_NODE = COMMENT_NODE;
const DOCUMENT_NODE = 9;
exports.DOCUMENT_NODE = DOCUMENT_NODE;
const DOCUMENT_TYPE_NODE = 10;
exports.DOCUMENT_TYPE_NODE = DOCUMENT_TYPE_NODE;
const DOCUMENT_FRAGMENT_NODE = 11;
exports.DOCUMENT_FRAGMENT_NODE = DOCUMENT_FRAGMENT_NODE;

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

const TEXT_SET = set([
  'plaintext',
  'script',
  'style',
  'textarea',
  'title',
  'xmp',
]);
exports.TEXT_SET = TEXT_SET;

const VOID_SET = set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'menuitem',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);
exports.VOID_SET = VOID_SET;

const re = set => new RegExp(`^(?:${[...set].join('|')})$`, 'i');

const TEXT_ELEMENTS = re(TEXT_SET);
exports.TEXT_ELEMENTS = TEXT_ELEMENTS;
const VOID_ELEMENTS = re(VOID_SET);
exports.VOID_ELEMENTS = VOID_ELEMENTS;

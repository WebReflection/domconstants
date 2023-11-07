/*! (c) Andrea Giammarchi - ISC */

export const ELEMENT_NODE = 1;
export const ATTRIBUTE_NODE = 2;
export const TEXT_NODE = 3;
export const COMMENT_NODE = 8;
export const DOCUMENT_NODE = 9;
export const DOCUMENT_TYPE_NODE = 10;
export const DOCUMENT_FRAGMENT_NODE = 11;

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

export const TEXT_SET = set([
  'plaintext',
  'script',
  'style',
  'textarea',
  'title',
  'xmp',
]);

export const VOID_SET = set([
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

const re = set => new RegExp(`^(?:${[...set].join('|')})$`, 'i');

export const TEXT_ELEMENTS = re(TEXT_SET);
export const VOID_ELEMENTS = re(VOID_SET);

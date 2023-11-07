/*! (c) Andrea Giammarchi - ISC */

export const ELEMENT_NODE = 1;
export const ATTRIBUTE_NODE = 2;
export const TEXT_NODE = 3;
export const COMMENT_NODE = 8;
export const DOCUMENT_NODE = 9;
export const DOCUMENT_TYPE_NODE = 10;
export const DOCUMENT_FRAGMENT_NODE = 11;

/** @type {Set<'PLAINTEXT' | 'SCRIPT' | 'STYLE' | 'TEXTAREA' | 'TITLE' | 'XMP'>} */
export const TEXT_SET = new Set([
  'PLAINTEXT',
  'SCRIPT',
  'STYLE',
  'TEXTAREA',
  'TITLE',
  'XMP',
]);

/** @type {Set<'AREA' | 'BASE' | 'BR' | 'COL' | 'EMBED' | 'HR' | 'IMG' | 'INPUT' | 'KEYGEN' | 'LINK' | 'MENUITEM' | 'META' | 'PARAM' | 'SOURCE' | 'TRACK' | 'WBR'>} */
export const VOID_SET = new Set([
  'AREA',
  'BASE',
  'BR',
  'COL',
  'EMBED',
  'HR',
  'IMG',
  'INPUT',
  'KEYGEN',
  'LINK',
  'MENUITEM',
  'META',
  'PARAM',
  'SOURCE',
  'TRACK',
  'WBR',
]);

const re = set => new RegExp(`^(?:${[...set].join('|')})$`, 'i');

export const TEXT_ELEMENTS = re(TEXT_SET);
export const VOID_ELEMENTS = re(VOID_SET);

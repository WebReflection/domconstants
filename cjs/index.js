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

const TEXT_ELEMENTS = /^(?:plaintext|script|style|textarea|title|xmp)$/i;
exports.TEXT_ELEMENTS = TEXT_ELEMENTS;
const VOID_ELEMENTS = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
exports.VOID_ELEMENTS = VOID_ELEMENTS;

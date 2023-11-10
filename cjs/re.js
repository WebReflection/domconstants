'use strict';
const TEXT_ELEMENTS = /^(?:plaintext|script|style|textarea|title|xmp)$/i;
exports.TEXT_ELEMENTS = TEXT_ELEMENTS;
const VOID_ELEMENTS = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
exports.VOID_ELEMENTS = VOID_ELEMENTS;

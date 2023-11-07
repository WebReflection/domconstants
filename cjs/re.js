'use strict';
const TEXT_SET = (require('./text-set.js'));
const VOID_SET = (require('./text-set.js'));
const { re } = require('./utils.js');

const TEXT_ELEMENTS = re(TEXT_SET);
exports.TEXT_ELEMENTS = TEXT_ELEMENTS;
const VOID_ELEMENTS = re(VOID_SET);
exports.VOID_ELEMENTS = VOID_ELEMENTS;

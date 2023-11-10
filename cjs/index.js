'use strict';
const TEXT_SET = (require('./text-set.js'));
const VOID_SET = (require('./void-set.js'));

(m => Object.keys(m).map(k => k !== 'default' && (exports[k] = m[k])))
(require('./constants.js'));
(m => Object.keys(m).map(k => k !== 'default' && (exports[k] = m[k])))
(require('./re.js'));

exports.TEXT_SET = TEXT_SET;
exports.VOID_SET = VOID_SET;

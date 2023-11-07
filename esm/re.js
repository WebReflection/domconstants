import TEXT_SET from './text-set.js';
import VOID_SET from './text-set.js';
import { re } from './utils.js';

export const TEXT_ELEMENTS = re(TEXT_SET);
export const VOID_ELEMENTS = re(VOID_SET);

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Ensure a string ends with *ending*
 * @function string.ensureEndsWith
 * @param {String} str
 * @param {String} ending
 * @returns {String}
 */
const ensureEndsWith = (str, ending) => str ? str.endsWith(ending) ? str : str + ending : ending;

var _default = ensureEndsWith;
exports.default = _default;
//# sourceMappingURL=ensureEndsWith.js.map
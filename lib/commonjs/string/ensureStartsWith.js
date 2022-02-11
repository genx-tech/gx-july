"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Ensure a string starts with *starting*
 * @function string.ensureStartsWith
 * @param {String} str
 * @param {String} starting
 * @returns {String}
 */
const ensureStartsWith = (str, starting) => str ? str.startsWith(starting) ? str : starting + str : starting;

var _default = ensureStartsWith;
exports.default = _default;
//# sourceMappingURL=ensureStartsWith.js.map
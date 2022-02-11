"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Drop a right part of a string if it ends with *ending*
 * @function string.dropIfEndsWith
 * @param {String} str
 * @param {String} ending
 * @returns {String}
 */
const dropIfEndsWith = (str, ending) => str && str.endsWith(ending) ? str.substring(0, str.length - ending.length) : str;

var _default = dropIfEndsWith;
exports.default = _default;
//# sourceMappingURL=dropIfEndsWith.js.map
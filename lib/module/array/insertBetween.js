"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Insert a separator as element into an array.
 * @alias array.insertBetween
 * @param {Array} arr
 * @param {*} separator
 * @returns {Array} The newly inserted array
 */
const insertBetween = (arr, separator) => arr.map((e, i) => i < arr.length - 1 ? [e, separator] : [e]).reduce((a, b) => [...a, b], []);

var _default = insertBetween;
exports.default = _default;
//# sourceMappingURL=insertBetween.js.map
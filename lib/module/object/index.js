"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlainObject = isPlainObject;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Check a variable whether is plain object.
 * 20x fasters than lodash
 * @param {*} any
 * @see [benchmark]{@link https://www.measurethat.net/Benchmarks/Show/11574/0/lodash-isplainobject-vs-js-constructor-check-with-more}
 */
function isPlainObject(any) {
  return any != null && (any.constructor === Object || _typeof(any) === 'object' && Object.getPrototypeOf(any) === null);
}
//# sourceMappingURL=index.js.map
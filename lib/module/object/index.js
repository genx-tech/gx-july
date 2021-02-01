"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlainObject = isPlainObject;

/**
 * Check a variable whether is plain object.
 * 20x fasters than lodash
 * @param {*} any
 * @see [benchmark]{@link https://www.measurethat.net/Benchmarks/Show/10259/0/lodash-isplainobject-vs-js-constructor-check}
 */
function isPlainObject(any) {
  return any != null && any.constructor === Object;
}
//# sourceMappingURL=index.js.map
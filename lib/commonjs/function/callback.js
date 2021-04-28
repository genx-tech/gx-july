"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity = void 0;

/**
 * Async iterator
 * @callback asyncIterator
 * @param {*} value
 * @param {*} key
 * @param {*} object
 * @returns {Promise}
 */

/**
 * Return the variable itself
 * @param  {*} value
 */
var identity = function identity(value) {
  return value;
};

exports.identity = identity;
//# sourceMappingURL=callback.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Remap the keys of object elements in an array, like projection.
 * @param {*} object
 * @param {integer} [n=1] - The number of k-v pair to take.
 */
function take(object, n) {
  n == null && (n = 1);
  var result = {},
      i = 0;

  for (var k in object) {
    if (i++ < n) {
      result[k] = object[k];
    } else {
      break;
    }
  }

  return result;
}

var _default = take;
exports.default = _default;
//# sourceMappingURL=take.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function take(object, n) {
  n == null && (n = 1);
  let result = {},
      i = 0;

  for (let k in object) {
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
module.exports = exports.default;
//# sourceMappingURL=take.js.map
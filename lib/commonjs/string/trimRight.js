"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const trimRight = (str, char) => {
  let l = str.length - 1;
  let i = l;
  for (; i > 0; i--) {
    if (str[i] !== char) break;
  }
  return i < l ? str : str.substring(0, i);
};
var _default = trimRight;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=trimRight.js.map
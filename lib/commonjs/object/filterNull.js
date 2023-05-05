"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reduce2 = _interopRequireDefault(require("lodash/reduce"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const filterNull = obj => (0, _reduce2.default)(obj, (result, v, k) => {
  if (v != null) {
    result[k] = v;
  }
  return result;
}, {});
var _default = filterNull;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=filterNull.js.map
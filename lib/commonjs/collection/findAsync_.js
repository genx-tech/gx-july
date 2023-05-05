"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _findKeyAsync_ = _interopRequireDefault(require("./findKeyAsync_"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function findAsync_(obj, asyncPredicate_) {
  const k = await (0, _findKeyAsync_.default)(obj, asyncPredicate_);
  return obj[k];
}
var _default = findAsync_;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=findAsync_.js.map
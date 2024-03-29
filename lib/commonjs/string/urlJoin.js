"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _dropIfEndsWith = _interopRequireDefault(require("./dropIfEndsWith"));
var _ensureStartsWith = _interopRequireDefault(require("./ensureStartsWith"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function join(base, extraPath, ...more) {
  if (more && more.length > 0) {
    return more.reduce((result, part) => join(result, part), join(base, extraPath));
  }
  return base ? extraPath ? (0, _dropIfEndsWith.default)(base, '/') + (0, _ensureStartsWith.default)(extraPath, '/') : base : extraPath;
}
var _default = join;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=urlJoin.js.map
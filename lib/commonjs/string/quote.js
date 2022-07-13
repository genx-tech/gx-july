"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _replaceAll = _interopRequireDefault(require("./replaceAll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function quote(str, quoteChar = '"') {
  return quoteChar + (0, _replaceAll.default)(str, quoteChar, '\\' + quoteChar) + quoteChar;
}

var _default = quote;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=quote.js.map
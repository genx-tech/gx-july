"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _replaceAll = _interopRequireDefault(require("./replaceAll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Quote a string.
 * @function string.quote
 * @param {String} str
 * @param {String} [quoteChar=']
 * @returns {String}
 */
function quote(str, quoteChar = '"') {
  return quoteChar + (0, _replaceAll.default)(str, quoteChar, '\\' + quoteChar) + quoteChar;
}

var _default = quote;
exports.default = _default;
//# sourceMappingURL=quote.js.map
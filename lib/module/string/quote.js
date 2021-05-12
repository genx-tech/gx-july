"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _text = require("./text");

/**
 * Quote a string.
 * @param {string} str
 * @param {string} quoteChar
 * @returns {string}
 */
function quote(str) {
  var quoteChar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '"';
  return quoteChar + (0, _text.replaceAll)(str, quoteChar, "\\" + quoteChar) + quoteChar;
}

var _default = quote;
exports.default = _default;
//# sourceMappingURL=quote.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _text = require("./text");

/**
 * Quote a string.
 * @alias string.quote
 * @param {string} str
 * @param {string} quoteChar
 * @returns {string}
 */
function quote(str, quoteChar = '"') {
  return quoteChar + (0, _text.replaceAll)(str, quoteChar, "\\" + quoteChar) + quoteChar;
}

var _default = quote;
exports.default = _default;
//# sourceMappingURL=quote.js.map
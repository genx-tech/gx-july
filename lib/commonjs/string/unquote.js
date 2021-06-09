"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _text = require("./text");

/**
 * Unquote a string
 * @alias string.unquote
 * @param {string} str
 * @param {boolean} [unescape=false] - True to unescape slashed quote, default false
 * @param {Set} [quoteSet] - Set of chars
 * @returns {string}
 */
function unquote(str, unescape, quoteSet) {
  if (typeof str !== 'string') {
    return str;
  }

  if (str.length < 2) {
    return str;
  }

  let start = str[0];

  if (start !== str[str.length - 1]) {
    return str;
  }

  if (quoteSet) {
    if (Array.isArray(quoteSet)) {
      quoteSet = new Set(quoteSet);
    }

    if (!quoteSet.has(start)) {
      return str;
    }
  }

  str = str.slice(1, -1);

  if (unescape) {
    return (0, _text.replaceAll)(str, '\\' + start, start);
  }

  return str;
}

var _default = unquote;
exports.default = _default;
//# sourceMappingURL=unquote.js.map
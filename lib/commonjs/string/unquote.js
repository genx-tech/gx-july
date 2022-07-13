"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _replaceAll = _interopRequireDefault(require("./replaceAll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    return (0, _replaceAll.default)(str, '\\' + start, start);
  }

  return str;
}

var _default = unquote;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=unquote.js.map
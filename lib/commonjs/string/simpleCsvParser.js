"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _replaceAll = _interopRequireDefault(require("./replaceAll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const simpleCsvParser = (str, options) => {
  const {
    delimiter,
    emptyAsNull
  } = {
    delimiter: ',',
    emptyAsNull: false,
    ...options
  };
  let inQuote = null;
  let start = 0;
  let result = [];
  let lastWord = null;
  let hasEscaped = false;
  const l = str.length;

  for (let i = 0; i < l; i++) {
    const ch = str[i];

    if (inQuote) {
      if (ch === inQuote) {
        if (str[i - 1] === '\\') {
          hasEscaped = true;
        } else {
          lastWord = str.substring(start, i);

          if (lastWord && hasEscaped) {
            lastWord = (0, _replaceAll.default)(lastWord, '\\' + inQuote, inQuote);
          }

          inQuote = null;
          hasEscaped = false;
        }
      }
    } else if (ch === delimiter) {
      if (lastWord == null && i > start) {
        lastWord = str.substring(start, i);
      }

      result.push(lastWord ? lastWord.trim() : emptyAsNull ? null : '');
      lastWord = null;
      hasEscaped = false;
      start = i + 1;
    } else if (ch === '"' || ch === "'") {
      if (lastWord == null) {
        inQuote = ch;
        start = i + 1;
      }
    }
  }

  if (lastWord == null) {
    lastWord = str.substring(start);
  }

  result.push(lastWord ? lastWord.trim() : emptyAsNull ? null : '');
  return result;
};

var _default = simpleCsvParser;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=simpleCsvParser.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const isQuoted = s => s && (s.startsWith("'") || s.startsWith('"')) && s[0] === s[s.length - 1];

var _default = isQuoted;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=isQuoted.js.map
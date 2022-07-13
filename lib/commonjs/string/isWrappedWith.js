"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const isWrappedWith = (s, q) => s && q && s.length > q.length && s.startsWith(q) && s.endsWith(q);

var _default = isWrappedWith;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=isWrappedWith.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const ensureStartsWith = (str, starting) => str ? str.startsWith(starting) ? str : starting + str : starting;

var _default = ensureStartsWith;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=ensureStartsWith.js.map
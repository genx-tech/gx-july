"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const ensureEndsWith = (str, ending) => str ? str.endsWith(ending) ? str : str + ending : ending;

var _default = ensureEndsWith;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=ensureEndsWith.js.map
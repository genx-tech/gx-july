"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const dropIfEndsWith = (str, ending) => str && str.endsWith(ending) ? str.substring(0, str.length - ending.length) : str;
var _default = dropIfEndsWith;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=dropIfEndsWith.js.map
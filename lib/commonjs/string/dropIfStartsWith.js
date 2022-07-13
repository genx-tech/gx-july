"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const dropIfStartsWith = (str, starting) => str && str.startsWith(starting) ? str.substring(starting.length) : str;

var _default = dropIfStartsWith;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=dropIfStartsWith.js.map
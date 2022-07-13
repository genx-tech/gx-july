"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const ifThen = (obj, predicate, then) => predicate(obj) ? then : obj;

var _default = ifThen;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=ifThen.js.map
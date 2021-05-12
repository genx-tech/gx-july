"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var ifThen = function ifThen(obj, predicate, then) {
  return predicate(obj) ? then : obj;
};

var _default = ifThen;
exports.default = _default;
//# sourceMappingURL=ifThen.js.map
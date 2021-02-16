"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ifThen = ifThen;

function ifThen(obj, predicate, then) {
  return predicate(obj) ? then : obj;
}
//# sourceMappingURL=index.js.map
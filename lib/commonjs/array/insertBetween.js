"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const insertSep = (lastIndex, separator) => (e, i) => i < lastIndex ? [e, separator] : [e];
const insertSepFunctor = (lastIndex, separator) => (e, i) => i < lastIndex ? [e, separator(i)] : [e];
const insertBetween = (arr, separator) => (typeof separator === 'function' ? arr.map(insertSepFunctor(arr.length - 1, separator)) : arr.map(insertSep(arr.length - 1, separator))).reduce((a, b) => [...a, b], []);
var _default = insertBetween;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=insertBetween.js.map
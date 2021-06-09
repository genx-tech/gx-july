"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Shortcut function for returning an alternative value if predicate returns true
 * @alias lang.ifThen
 * @param {*} obj 
 * @param {*} predicate 
 * @param {*} then 
 * @returns {*} Returns *then* if predicate(obj) is true, otherwise returns the original obj
 */
const ifThen = (obj, predicate, then) => predicate(obj) ? then : obj;

var _default = ifThen;
exports.default = _default;
//# sourceMappingURL=ifThen.js.map
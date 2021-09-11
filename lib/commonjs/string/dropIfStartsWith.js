"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Drop a left part of a string if it starts with *starting*
 * @function srting.dropIfStartsWith
 * @param {String} str
 * @param {String} starting
 * @returns {String}
 */
const dropIfStartsWith = (str, starting) => str.startsWith(starting) ? str.substr(starting.length) : str;

var _default = dropIfStartsWith;
exports.default = _default;
//# sourceMappingURL=dropIfStartsWith.js.map
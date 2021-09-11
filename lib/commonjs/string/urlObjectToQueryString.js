"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Stringify an object into url query string.
 * @function string.urlObjectToQueryString
 * @param {Object} obj
 * @returns {String}
 */
function objectToQueryString(obj) {
  let parts = [];

  for (let k in obj) {
    const v = obj[k];
    const part = v == null ? encodeURIComponent(k) : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`;
    parts.push(part);
  }

  return parts.join('&');
}

var _default = objectToQueryString;
exports.default = _default;
//# sourceMappingURL=urlObjectToQueryString.js.map
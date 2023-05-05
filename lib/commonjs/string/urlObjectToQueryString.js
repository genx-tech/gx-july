"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function objectToQueryString(obj, excludeNullValue) {
  let parts = [];

  for (let k in obj) {
    const v = obj[k];
    let part;

    if (v != null) {
      part = encodeURIComponent(k) + '=' + encodeURIComponent(v);
    } else if (excludeNullValue) {
      continue;
    } else {
      part = encodeURIComponent(k);
    }

    parts.push(part);
  }

  return parts.join('&');
}

var _default = objectToQueryString;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=urlObjectToQueryString.js.map
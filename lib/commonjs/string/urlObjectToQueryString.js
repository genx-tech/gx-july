"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function objectToQueryString(obj) {
  let parts = [];

  for (let k in obj) {
    const v = obj[k];
    let part = encodeURIComponent(k);

    if (v != null) {
      part += '=' + encodeURIComponent(v);
    }

    parts.push(part);
  }

  return parts.join('&');
}

var _default = objectToQueryString;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=urlObjectToQueryString.js.map
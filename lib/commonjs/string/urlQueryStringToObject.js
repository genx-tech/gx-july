"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function queryStringToObject(qs) {
  if (!qs) {
    return {};
  }

  const query = qs[0] === '?' ? qs.substring(1) : qs;
  const parts = query.split('&');
  return parts.reduce((r, pair) => {
    const [k, v] = pair.split('=');
    r[decodeURIComponent(k)] = v == null ? null : decodeURIComponent(v);
    return r;
  }, {});
}

var _default = queryStringToObject;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=urlQueryStringToObject.js.map
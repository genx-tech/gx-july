"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _each2 = _interopRequireDefault(require("lodash/each"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function remap(object, mapping, keepUnmapped) {
  if (typeof mapping === 'string') return {
    [mapping]: object
  };
  let newObj = {};
  (0, _each2.default)(object, (v, k) => {
    if (mapping.hasOwnProperty(k)) {
      let nk = mapping[k];
      if (Array.isArray(nk)) {
        newObj[nk[0]] = {
          ...newObj[nk[0]],
          ...remap(v, nk[1], keepUnmapped)
        };
      } else {
        newObj[nk] = v;
      }
    } else {
      if (keepUnmapped) {
        newObj[k] = v;
      }
    }
  });
  return newObj;
}
var _default = remap;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=remap.js.map
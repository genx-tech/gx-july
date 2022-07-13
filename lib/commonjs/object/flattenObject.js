"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _each2 = _interopRequireDefault(require("lodash/each"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const flattenObject = (object, keyPathSep = '.') => {
  const result = {};
  (0, _each2.default)(object, (v, k) => {
    k = k.toString();

    if (v != null && typeof v === 'object') {
      v = flattenObject(v, keyPathSep);
      (0, _each2.default)(v, (v2, k2) => {
        k2 = k2.toString();
        result[k + keyPathSep + k2] = v2;
      });
    } else {
      result[k] = v;
    }
  });
  return result;
};

var _default = flattenObject;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=flattenObject.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _each2 = _interopRequireDefault(require("lodash/each"));

var _isPlainObject = _interopRequireDefault(require("./isPlainObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert a hierachy object into a flat object with the key path sperarated by a given string, default as ".".
 * @param {*} object 
 * @param {*} keyPathSep 
 * @returns {object}
 */
const flattenObject = function (object) {
  let keyPathSep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';
  const result = {};
  (0, _each2.default)(object, (v, k) => {
    if ((0, _isPlainObject.default)(v)) {
      v = flattenObject(v, keyPathSep);
      (0, _each2.default)(v, (v2, k2) => {
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
//# sourceMappingURL=flattenObject.js.map
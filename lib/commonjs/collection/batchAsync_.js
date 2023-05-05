"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _isPlainObject = _interopRequireDefault(require("../object/isPlainObject"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function batchAsync_(obj, iterator) {
  if (Array.isArray(obj)) {
    const r = [];
    let l = obj.length;
    for (let i = 0; i < l; i++) {
      r.push(iterator(obj[i], i, obj));
    }
    return Promise.all(r);
  }
  if ((0, _isPlainObject.default)(obj)) {
    const keys = [];
    const values = [];
    for (let k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k)) {
        keys.push(k);
        values.push(iterator(obj[k], k, obj));
      }
    }
    const result = await Promise.all(values);
    return keys.reduce((r, k, i) => {
      r[k] = result[i];
      return r;
    }, {});
  }
  return Promise.reject('Invalid argument!');
}
var _default = batchAsync_;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=batchAsync_.js.map
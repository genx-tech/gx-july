"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isPlainObject = _interopRequireDefault(require("../object/isPlainObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function eachAsync_(obj, iterator) {
  if (Array.isArray(obj)) {
    let r = [];
    let l = obj.length;

    for (let i = 0; i < l; i++) {
      r.push(await iterator(obj[i], i, obj));
    }

    return r;
  } else if ((0, _isPlainObject.default)(obj)) {
    let r = {};

    for (let k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k)) {
        r[k] = await iterator(obj[k], k, obj);
      }
    }

    return r;
  } else {
    return Promise.reject('Invalid argument!');
  }
}

var _default = eachAsync_;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=eachAsync_.js.map
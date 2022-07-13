"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isPlainObject = _interopRequireDefault(require("../object/isPlainObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function filterAsync_(obj, asyncPredicate) {
  if (Array.isArray(obj)) {
    let r = [];
    let l = obj.length;

    for (let i = 0; i < l; i++) {
      const el = obj[i];

      if (await asyncPredicate(el, i, obj)) {
        r.push(el);
      }
    }

    return r;
  } else if ((0, _isPlainObject.default)(obj)) {
    let r = {};

    for (let k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k)) {
        const el = obj[k];

        if (await asyncPredicate(el, k, obj)) {
          r[k] = el;
        }
      }
    }

    return r;
  } else {
    return Promise.reject('Invalid argument!');
  }
}

var _default = filterAsync_;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=filterAsync_.js.map
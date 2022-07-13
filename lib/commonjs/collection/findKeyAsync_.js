"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isPlainObject = _interopRequireDefault(require("../object/isPlainObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function findKeyAsync_(obj, asyncPredicate_) {
  if (Array.isArray(obj)) {
    let l = obj.length;

    for (let i = 0; i < l; i++) {
      const el = obj[i];

      if (await asyncPredicate_(el, i, obj)) {
        return i;
      }
    }

    return undefined;
  } else if ((0, _isPlainObject.default)(obj)) {
    for (let k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k)) {
        const el = obj[k];

        if (await asyncPredicate_(el, k, obj)) {
          return k;
        }
      }
    }

    return undefined;
  }

  return Promise.reject('The first argument should be a collection.');
}

var _default = findKeyAsync_;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=findKeyAsync_.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isPlainObject = _interopRequireDefault(require("../object/isPlainObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Iterate a collection asynchronously until predicate returns true
 * The returned value is the key of found item if the given collection is an object.
 * That's different from the _.find() function in lodash.
 * @alias collection.findAsync_
 * @async
 * @param {Array|Object} obj
 * @param {asyncIterator} asyncPredicate
 * @returns {Promise.<Object|undefined>}
 */
async function findAsync_(obj, asyncPredicate) {
  if (Array.isArray(obj)) {
    let l = obj.length;

    for (let i = 0; i < l; i++) {
      const el = obj[i];

      if (await asyncPredicate(el, i, obj)) {
        return el;
      }
    }

    return undefined;
  } else if ((0, _isPlainObject.default)(obj)) {
    for (let k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k)) {
        const el = obj[k];

        if (await asyncPredicate(el, k, obj)) {
          return k;
        }
      }
    }

    return undefined;
  } else {
    return Promise.reject('Invalid argument!');
  }
}

var _default = findAsync_;
exports.default = _default;
//# sourceMappingURL=findAsync_.js.map
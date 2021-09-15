"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isPlainObject = _interopRequireDefault(require("../object/isPlainObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Iterate a collection until predicate returns true
 * The returned value is undefined if not found.
 * That's different from the _.find() function in lodash.
 * @alias collection.findKey
 * @async
 * @param {Array|Object} obj
 * @param {iterator} predicate
 * @returns {Promise.<Object|undefined>}
 */
async function findKey(obj, predicate) {
  if (Array.isArray(obj)) {
    let l = obj.length;

    for (let i = 0; i < l; i++) {
      const el = obj[i];

      if (predicate(el, i, obj)) {
        return i;
      }
    }

    return undefined;
  } else if ((0, _isPlainObject.default)(obj)) {
    for (let k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k)) {
        const el = obj[k];

        if (predicate(el, k, obj)) {
          return k;
        }
      }
    }

    return undefined;
  }

  throw new Error('The first argument should be a collection.');
}

var _default = findKey;
exports.default = _default;
//# sourceMappingURL=findKey.js.map
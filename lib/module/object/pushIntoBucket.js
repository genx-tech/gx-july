"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get2 = _interopRequireDefault(require("lodash/get"));

var _set2 = _interopRequireDefault(require("lodash/set"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Push an value into an array element of a collection
 * @alias object.pushIntoBucket
 * @param {object} collection
 * @param {string} key
 * @param {object} value
 * @param {boolean} [flattenArray=false] - Whether to flatten the array, if the given value is an array.
 * @returns {*} The modified bucket
 */
function pushIntoBucket(collection, key, value, flattenArray) {
  let bucket = (0, _get2.default)(collection, key);

  if (Array.isArray(bucket)) {
    if (Array.isArray(value) && flattenArray) {
      bucket = bucket.concat(value);
      (0, _set2.default)(collection, key, bucket);
    } else {
      bucket.push(value);
    }
  } else if (bucket == null) {
    bucket = Array.isArray(value) && flattenArray ? value.concat() : [value];
    (0, _set2.default)(collection, key, bucket);
  } else {
    bucket = Array.isArray(value) && flattenArray ? [bucket, ...value] : [bucket, value];
    (0, _set2.default)(collection, key, bucket);
  }

  return bucket;
}

var _default = pushIntoBucket;
exports.default = _default;
//# sourceMappingURL=pushIntoBucket.js.map
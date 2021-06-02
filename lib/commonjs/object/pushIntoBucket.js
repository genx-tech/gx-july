"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get2 = _interopRequireDefault(require("lodash/get"));

var _set2 = _interopRequireDefault(require("lodash/set"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  var bucket = (0, _get2.default)(collection, key);

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
    bucket = Array.isArray(value) && flattenArray ? [bucket].concat(_toConsumableArray(value)) : [bucket, value];
    (0, _set2.default)(collection, key, bucket);
  }

  return bucket;
}

var _default = pushIntoBucket;
exports.default = _default;
//# sourceMappingURL=pushIntoBucket.js.map
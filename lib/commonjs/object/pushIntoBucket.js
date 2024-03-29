"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _get2 = _interopRequireDefault(require("./get"));
var _set2 = _interopRequireDefault(require("./set"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
module.exports = exports.default;
//# sourceMappingURL=pushIntoBucket.js.map
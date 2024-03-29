"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.addEntry = void 0;
var _isPlainObject = _interopRequireDefault(require("./isPlainObject"));
var _each2 = _interopRequireDefault(require("lodash/each"));
var _isInteger = _interopRequireWildcard(require("../validators/isInteger"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const addEntry = (obj, key, value, numberAsArrayIndex) => {
  if (numberAsArrayIndex && (0, _isInteger.default)(key, {
    range: _isInteger.RANGE_INDEX
  })) {
    if (Array.isArray(obj)) {
      const index = parseInt(key, 10);
      if (obj.length <= index) {
        const numToFill = index - obj.length;
        if (numToFill > 0) {
          for (let i = 0; i < numToFill; i++) {
            obj.push(undefined);
          }
        }
        obj.push(value);
      } else {
        obj[index] = value;
      }
      return obj[index];
    }
  }
  obj[key] = value;
  return obj[key];
};
exports.addEntry = addEntry;
const _set = (collection, keyPath, value, options) => {
  options = {
    numberAsArrayIndex: true,
    keyPathSeparator: '.',
    ...options
  };
  if (collection == null || typeof collection !== 'object') {
    return collection;
  }
  if (keyPath == null) {
    return collection;
  }
  if ((0, _isPlainObject.default)(keyPath) && typeof value === 'undefined') {
    (0, _each2.default)(keyPath, (v, k) => _set(collection, k, v, options));
    return collection;
  }
  let nodes = Array.isArray(keyPath) ? keyPath.concat() : keyPath.split(options.keyPathSeparator);
  const length = nodes.length;
  if (length > 0) {
    const lastIndex = length - 1;
    let index = 0;
    let nested = collection;
    while (nested != null && index < lastIndex) {
      const key = nodes[index++];
      let next = nested[key];
      if (next == null || typeof next !== 'object') {
        const nextKey = nodes[index];
        if (options.numberAsArrayIndex && (0, _isInteger.default)(nextKey, {
          range: _isInteger.RANGE_INDEX
        })) {
          next = addEntry(nested, key, [], options.numberAsArrayIndex);
        } else {
          next = addEntry(nested, key, {}, options.numberAsArrayIndex);
        }
      }
      nested = next;
    }
    const lastKey = nodes[lastIndex];
    addEntry(nested, lastKey, value, options.numberAsArrayIndex);
  }
  return collection;
};
var _default = _set;
exports.default = _default;
//# sourceMappingURL=set.js.map
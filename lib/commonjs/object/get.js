"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Get a value by dot-separated path or key array from a collection
 *  different from lodash/get)
 * @param {object} collection - The collection
 * @param {string|array} keyPath - A dot-separated path (dsp) or a key array, e.g. settings.xxx.yyy, or ['setting', 'xxx', 'yyy']
 * @param {object} [defaultValue] - The default value if the path does not exist
 * @returns {*}
 */
var _get = function _get(collection, keyPath, defaultValue) {
  if (keyPath == null) {
    var _collection;

    return (_collection = collection) !== null && _collection !== void 0 ? _collection : defaultValue;
  }

  var nodes = Array.isArray(keyPath) ? keyPath : keyPath.split('.');

  if (collection == null) {
    return defaultValue;
  }

  var index = 0;
  var length = nodes.length;

  while (collection != null && index < length) {
    collection = collection[nodes[index++]];
  }

  return collection != null && index && index == length ? collection : defaultValue;
};

var _default = _get;
exports.default = _default;
//# sourceMappingURL=get.js.map
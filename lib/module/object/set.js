"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Set a value by dot-separated path or key array into a collection
 * @param {object} collection - The collection
 * @param {string} keyPath - A dot-separated path (dsp) or a key array, e.g. settings.xxx.yyy, or ['setting', 'xxx', 'yyy']
 * @param {object} value - The default value if the path does not exist
 * @returns {*}
 */
var _set = function _set(collection, keyPath, value) {
  if (collection == null || _typeof(collection) !== 'object') {
    return collection;
  }

  if (keyPath == null) {
    return collection;
  }

  var nodes = Array.isArray(keyPath) ? keyPath.concat() : keyPath.split('.');
  var length = nodes.length;

  if (length > 0) {
    var lastIndex = length - 1;
    var index = 0;
    var nested = collection;

    while (nested != null && index < lastIndex) {
      var key = nodes[index++];
      var next = nested[key];

      if (_typeof(next) !== 'object') {
        next = nested[key] = {};
      }

      nested = next;
    }

    nested[nodes[lastIndex]] = value;
  }

  return collection;
};

var _default = _set;
exports.default = _default;
//# sourceMappingURL=set.js.map
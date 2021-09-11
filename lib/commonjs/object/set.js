"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Set a value by dot-separated path or key array into a collection
 * Does not support '[i]', e.g. 'a[0].b.c' style accessor, use [ 'a',  0, 'b', 'c' ] instead, different from lodash/set
 * @alias  object.set
 * @param {Object} collection - The collection
 * @param {string} keyPath - A dot-separated path (dsp) or a key array, e.g. settings.xxx.yyy, or ['setting', 'xxx', 'yyy']
 * @param {Object} value - The default value if the path does not exist
 * @returns {*}
 */
const _set = (collection, keyPath, value) => {
  if (collection == null || typeof collection !== 'object') {
    return collection;
  }

  if (keyPath == null) {
    return collection;
  }

  let nodes = Array.isArray(keyPath) ? keyPath.concat() : keyPath.split('.');
  const length = nodes.length;

  if (length > 0) {
    const lastIndex = length - 1;
    let index = 0;
    let nested = collection;

    while (nested != null && index < lastIndex) {
      const key = nodes[index++];
      let next = nested[key];

      if (typeof next !== 'object') {
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
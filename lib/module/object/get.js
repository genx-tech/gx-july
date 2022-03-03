/**
 * Get a value by dot-separated path or key array from a collection
 * Does not support '[i]', e.g. 'a[0].b.c' style accessor, use [ 'a',  0, 'b', 'c' ] instead, different from lodash/get
 * @alias object.get
 * @param {Object} collection - The collection
 * @param {string|array} keyPath - A dot-separated path (dsp) or a key array, e.g. settings.xxx.yyy, or ['setting', 'xxx', 'yyy']
 * @param {Object} [defaultValue] - The default value if the path does not exist
 * @returns {*}
 */
const _get = (collection, keyPath, defaultValue) => {
  if (keyPath == null) {
    var _collection;

    return (_collection = collection) !== null && _collection !== void 0 ? _collection : undefined;
  }

  let nodes = Array.isArray(keyPath) ? keyPath : typeof keyPath === 'string' ? keyPath.split('.') : [keyPath];

  if (collection == null) {
    return defaultValue !== null && defaultValue !== void 0 ? defaultValue : collection;
  }

  let index = 0;
  const length = nodes.length;

  while (collection != null && index < length) {
    collection = collection[nodes[index++]];
  }

  return typeof collection !== 'undefined' && index && index === length ? collection : defaultValue;
};

export default _get;
//# sourceMappingURL=get.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const _get = (collection, keyPath, defaultValue) => {
  if (keyPath == null) {
    return collection ?? undefined;
  }

  let nodes = Array.isArray(keyPath) ? keyPath : typeof keyPath === 'string' ? keyPath.split('.') : [keyPath];

  if (collection == null) {
    return defaultValue ?? collection;
  }

  let index = 0;
  const length = nodes.length;

  while (collection != null && index < length) {
    collection = collection[nodes[index++]];
  }

  return typeof collection !== 'undefined' && index && index === length ? collection : defaultValue;
};

var _default = _get;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=get.js.map
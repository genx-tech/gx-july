"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const arrayToObject = (arrayOfObjects, keyGetter, valueGetter) => {
  if (arrayOfObjects == null) {
    return null;
  }

  if (!Array.isArray(arrayOfObjects)) {
    throw new Error('The target argument should be an array.');
  }

  const _keyGetter = typeof keyGetter === 'function' ? keyGetter : obj => obj[keyGetter];

  const _valueGetter = valueGetter == null ? obj => obj : typeof valueGetter === 'function' ? valueGetter : obj => obj[valueGetter];

  return arrayOfObjects.reduce((table, obj, index) => {
    table[_keyGetter(obj, index)] = _valueGetter(obj, index);
    return table;
  }, {});
};

var _default = arrayToObject;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=arrayToObject.js.map
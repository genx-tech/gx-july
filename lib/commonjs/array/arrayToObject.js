"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const arrayToObject = (arrayOfObjects, keyGetter, valueGetter) => {
  const _keyGetter = typeof keyGetter === 'function' ? keyGetter : obj => obj[keyGetter];

  const _valueGetter = valueGetter == null ? obj => obj : typeof valueGetter === 'function' ? valueGetter : obj => obj[valueGetter];

  return arrayOfObjects.reduce((table, obj) => {
    table[_keyGetter(obj)] = _valueGetter(obj);
    return table;
  }, {});
};

var _default = arrayToObject;
exports.default = _default;
//# sourceMappingURL=arrayToObject.js.map
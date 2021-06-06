"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var arrayToObject = function arrayToObject(arrayOfObjects, keyGetter, valueGetter) {
  var _keyGetter = typeof keyGetter === 'function' ? keyGetter : function (obj) {
    return obj[keyGetter];
  };

  var _valueGetter = valueGetter == null ? function (obj) {
    return obj;
  } : typeof valueGetter === 'function' ? valueGetter : function (obj) {
    return obj[valueGetter];
  };

  return arrayOfObjects.reduce(function (table, obj) {
    table[_keyGetter(obj)] = _valueGetter(obj);
    return table;
  }, {});
};

var _default = arrayToObject;
exports.default = _default;
//# sourceMappingURL=arrayToObject.js.map
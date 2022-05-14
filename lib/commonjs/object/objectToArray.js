"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _map2 = _interopRequireDefault(require("lodash/map"));

var _get2 = _interopRequireDefault(require("./get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert a k-v paired object into an array pair-by-pair.
 * @alias object.objectToArray
 * @param {*} object
 * @param {*} keyNaming
 * @param {*} valueNaming
 * @returns {array}
 */
const objectToArray = (object, keyNaming, valueNaming, valuePath) => {
  var _keyNaming, _valueNaming;

  (_keyNaming = keyNaming) !== null && _keyNaming !== void 0 ? _keyNaming : keyNaming = 'name';
  (_valueNaming = valueNaming) !== null && _valueNaming !== void 0 ? _valueNaming : valueNaming = 'value';
  return (0, _map2.default)(object, (v, k) => ({
    [keyNaming]: k,
    [valueNaming]: valuePath ? (0, _get2.default)(v, valuePath) : v
  }));
};

var _default = objectToArray;
exports.default = _default;
//# sourceMappingURL=objectToArray.js.map
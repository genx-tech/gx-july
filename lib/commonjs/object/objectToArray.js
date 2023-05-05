"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _map2 = _interopRequireDefault(require("lodash/map"));
var _get2 = _interopRequireDefault(require("./get"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const objectToArray = (object, keyNaming, valueNaming, valuePath) => {
  if (typeof keyNaming === 'function') {
    if (valueNaming != null || valuePath != null) {
      throw new Error('Invalid argument!');
    }
    return (0, _map2.default)(object, keyNaming);
  }
  keyNaming ?? (keyNaming = 'name');
  valueNaming ?? (valueNaming = 'value');
  return (0, _map2.default)(object, (v, k) => ({
    [keyNaming]: k,
    [valueNaming]: valuePath ? (0, _get2.default)(v, valuePath) : v
  }));
};
var _default = objectToArray;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=objectToArray.js.map
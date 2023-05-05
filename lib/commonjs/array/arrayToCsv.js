"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _quote = _interopRequireDefault(require("../string/quote"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const arrayToCsv = (data, separator = ',') => {
  if (data == null) {
    return '';
  }
  if (!Array.isArray(data)) {
    throw new Error('The target argument should be an array.');
  }
  return data.map(elem => {
    elem = elem.toString();
    return elem.indexOf(separator) !== -1 ? (0, _quote.default)(elem, '"') : elem;
  }).join(separator);
};
var _default = arrayToCsv;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=arrayToCsv.js.map
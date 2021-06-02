"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _range2 = _interopRequireDefault(require("lodash/range"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Bin to hex, like 0x7F
 * @alias string.bin2Hex
 * @param {binary} bin
 * @returns {string}
 */
function bin2Hex(bin) {
  bin = bin.toString();
  return '0x' + (0, _range2.default)(bin.length).map(function (i) {
    return bin.charCodeAt(i).toString(16);
  }).join('');
}

var _default = bin2Hex;
exports.default = _default;
//# sourceMappingURL=bin2Hex.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _upperFirst2 = _interopRequireDefault(require("lodash/upperFirst"));

var _camelCase2 = _interopRequireDefault(require("lodash/camelCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert a string to pascal case, 'fooBar'
 * @function string.pascalCase
 * @param {String} str
 * @returns {String}
 */
const pascalCase = str => (0, _upperFirst2.default)((0, _camelCase2.default)(str));

var _default = pascalCase;
exports.default = _default;
//# sourceMappingURL=pascalCase.js.map
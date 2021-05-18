"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "kebabCase", {
  enumerable: true,
  get: function () {
    return _kebabCase.default;
  }
});
Object.defineProperty(exports, "snakeCase", {
  enumerable: true,
  get: function () {
    return _snakeCase.default;
  }
});
exports.pascalCase = exports.camelCase = void 0;

var _upperFirst2 = _interopRequireDefault(require("lodash/upperFirst"));

var _camelCase2 = _interopRequireDefault(require("lodash/camelCase"));

var _kebabCase = _interopRequireDefault(require("lodash/kebabCase"));

var _snakeCase = _interopRequireDefault(require("lodash/snakeCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert a string to kebab case
 * @function module:naming.kebabCase
 * @param {*} str 
 * @returns {string}
 */

/**
 * Convert a string to snake case
 * @function module:naming.snakeCase
 * @param {*} str 
 * @returns {string}
 */

/**
 * Convert a string to camel case
 * @function module:naming.camelCase
 * @param {*} str 
 * @returns {string}
 */
const camelCase = _camelCase2.default;
/**
 * Convert a string to pascal case
 * @function module:naming.pascalCase
 * @param {*} str 
 * @returns {string}
 */

exports.camelCase = camelCase;

const pascalCase = str => (0, _upperFirst2.default)((0, _camelCase2.default)(str));

exports.pascalCase = pascalCase;
//# sourceMappingURL=naming.js.map
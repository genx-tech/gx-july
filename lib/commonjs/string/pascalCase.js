"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _upperFirst2 = _interopRequireDefault(require("lodash/upperFirst"));

var _camelCase2 = _interopRequireDefault(require("lodash/camelCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const pascalCase = str => (0, _upperFirst2.default)((0, _camelCase2.default)(str));

var _default = pascalCase;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=pascalCase.js.map
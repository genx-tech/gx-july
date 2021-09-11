"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _compile = _interopRequireDefault(require("./compile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Interpolate values
 * @function string.template
 * @param {String} str
 * @param {Object} values
 * @param {Object} [settings] - Template settings, {@link https://lodash.com/docs/4.17.15#template}
 * @returns {String}
 */
function template(str, values, settings) {
  return (0, _compile.default)(str, settings)(values);
}

var _default = template;
exports.default = _default;
//# sourceMappingURL=template.js.map
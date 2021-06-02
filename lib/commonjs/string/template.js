"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template2 = _interopRequireDefault(require("lodash/template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateSettings = {
  escape: false,
  evaluate: false,
  imports: false,
  interpolate: /{{([\s\S]+?)}}/g,
  variable: false
};

function compile(str) {
  return (0, _template2.default)(str, templateSettings);
}
/**
 * Interpolate values 
 * @alias string.template
 * @param {string} str
 * @param {object} values
 * @returns {string}
 */


function template(str, values) {
  return compile(str)(values);
}

template.compile = compile;
var _default = template;
exports.default = _default;
//# sourceMappingURL=template.js.map
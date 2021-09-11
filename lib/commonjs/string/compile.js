"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template2 = _interopRequireDefault(require("lodash/template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const templateSettings = {
  escape: false,
  evaluate: false,
  imports: false,
  interpolate: /{{([\s\S]+?)}}/g,
  variable: false
};
/**
 * @function string.compile
 * @param {String} str
 * @param {Object} [settings] - Template settings, {@link https://lodash.com/docs/4.17.15#template}
 * @returns {Template}
 */

const compile = (str, settings) => {
  return (0, _template2.default)(str, settings !== null && settings !== void 0 ? settings : templateSettings);
};

var _default = compile;
exports.default = _default;
//# sourceMappingURL=compile.js.map
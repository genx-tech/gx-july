"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dropIfEndsWith = _interopRequireDefault(require("./dropIfEndsWith"));

var _ensureStartsWith = _interopRequireDefault(require("./ensureStartsWith"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Join base url and the extra url path.
 * @function string.urlJoin
 * @param {String} base
 * @param {String} extraPath
 * @param  {...any} more - More path
 * @returns {String}
 */
function join(base, extraPath) {
  for (var _len = arguments.length, more = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    more[_key - 2] = arguments[_key];
  }

  if (more && more.length > 0) {
    return more.reduce((result, part) => join(result, part), join(base, extraPath));
  }

  return base ? extraPath ? (0, _dropIfEndsWith.default)(base, '/') + (0, _ensureStartsWith.default)(extraPath, '/') : base : extraPath;
}

var _default = join;
exports.default = _default;
//# sourceMappingURL=urlJoin.js.map
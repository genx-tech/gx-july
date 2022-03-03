"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _each2 = _interopRequireDefault(require("lodash/each"));

var _isPlainObject = _interopRequireDefault(require("./isPlainObject"));

var _set = _interopRequireDefault(require("./set"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const unflattenObject = function (object) {
  let keyPathSep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';

  if (!(0, _isPlainObject.default)(object)) {
    throw new Error('The argument is not an object.');
  }

  const options = {
    numberAsArrayIndex: true,
    keyPathSeparator: keyPathSep
  };
  const result = {};
  (0, _each2.default)(object, (v, k) => {
    (0, _set.default)(result, k, v, options);
  });
  return result;
};

var _default = unflattenObject;
exports.default = _default;
//# sourceMappingURL=unflattenObject.js.map
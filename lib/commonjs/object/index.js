"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "cowSet", {
  enumerable: true,
  get: function () {
    return _cowSet.default;
  }
});
Object.defineProperty(exports, "diff", {
  enumerable: true,
  get: function () {
    return _diff.default;
  }
});
Object.defineProperty(exports, "flattenObject", {
  enumerable: true,
  get: function () {
    return _flattenObject.default;
  }
});
Object.defineProperty(exports, "get", {
  enumerable: true,
  get: function () {
    return _get.default;
  }
});
Object.defineProperty(exports, "isPlainObject", {
  enumerable: true,
  get: function () {
    return _isPlainObject.default;
  }
});
exports.makePath = void 0;
Object.defineProperty(exports, "objectToArray", {
  enumerable: true,
  get: function () {
    return _objectToArray.default;
  }
});
Object.defineProperty(exports, "pushIntoBucket", {
  enumerable: true,
  get: function () {
    return _pushIntoBucket.default;
  }
});
Object.defineProperty(exports, "remap", {
  enumerable: true,
  get: function () {
    return _remap.default;
  }
});
Object.defineProperty(exports, "set", {
  enumerable: true,
  get: function () {
    return _set.default;
  }
});
Object.defineProperty(exports, "take", {
  enumerable: true,
  get: function () {
    return _take.default;
  }
});
exports.toPath = void 0;
Object.defineProperty(exports, "unflattenObject", {
  enumerable: true,
  get: function () {
    return _unflattenObject.default;
  }
});

var _isPlainObject = _interopRequireDefault(require("./isPlainObject"));

var _remap = _interopRequireDefault(require("./remap"));

var _diff = _interopRequireDefault(require("./diff"));

var _take = _interopRequireDefault(require("./take"));

var _pushIntoBucket = _interopRequireDefault(require("./pushIntoBucket"));

var _get = _interopRequireDefault(require("./get"));

var _set = _interopRequireDefault(require("./set"));

var _cowSet = _interopRequireDefault(require("./cowSet"));

var _objectToArray = _interopRequireDefault(require("./objectToArray"));

var _flattenObject = _interopRequireDefault(require("./flattenObject"));

var _unflattenObject = _interopRequireDefault(require("./unflattenObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const toPath = function (p) {
  let keyPathSeparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';
  return p == null ? [] : typeof p === 'string' ? p.split(keyPathSeparator) : Array.isArray(p) ? p : [p];
};

exports.toPath = toPath;

const makePath = function (part1, part2) {
  let keyPathSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  return [...toPath(part1, keyPathSeparator), ...toPath(part2, keyPathSeparator)];
};

exports.makePath = makePath;
//# sourceMappingURL=index.js.map
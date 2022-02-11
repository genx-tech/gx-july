"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "arrayToObject", {
  enumerable: true,
  get: function () {
    return _arrayToObject.default;
  }
});
exports.insert = exports.copyArrayLike = void 0;
Object.defineProperty(exports, "insertBetween", {
  enumerable: true,
  get: function () {
    return _insertBetween.default;
  }
});
exports.swap = exports.move = void 0;
Object.defineProperty(exports, "zipAndFlat", {
  enumerable: true,
  get: function () {
    return _zipAndFlat.default;
  }
});

var _insertBetween = _interopRequireDefault(require("./insertBetween"));

var _zipAndFlat = _interopRequireDefault(require("./zipAndFlat"));

var _arrayToObject = _interopRequireDefault(require("./arrayToObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Some immutable array helpers!
 */
const move = (array, from, to) => {
  const copy = copyArrayLike(array);
  const value = copy[from];
  copy.splice(from, 1);
  copy.splice(to, 0, value);
  return copy;
};

exports.move = move;

const swap = (arrayLike, indexA, indexB) => {
  const copy = copyArrayLike(arrayLike);
  const a = copy[indexA];
  copy[indexA] = copy[indexB];
  copy[indexB] = a;
  return copy;
};

exports.swap = swap;

const insert = (arrayLike, index, value) => {
  const copy = copyArrayLike(arrayLike);
  copy.splice(index, 0, value);
  return copy;
};

exports.insert = insert;

const copyArrayLike = arrayLike => {
  if (!arrayLike) {
    return [];
  } else {
    return [...arrayLike];
  }
};

exports.copyArrayLike = copyArrayLike;
//# sourceMappingURL=index.js.map
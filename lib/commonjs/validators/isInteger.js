"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RANGE_POSITIVE = exports.RANGE_NON_ZERO = exports.RANGE_NEGATIVE = exports.RANGE_INDEX = void 0;
const regexInt = /^(\+|-)?\d+$/;
const regexPos = /^\+?[1-9]\d*$/;
const regexIndex = /^0$|^([1-9]\d*)$/;
const regexNeg = /^-[1-9]\d*$/;
const regexNonZero = /^(\+|-)?[1-9]\d*$/;
const RANGE_POSITIVE = 'positive';
exports.RANGE_POSITIVE = RANGE_POSITIVE;
const RANGE_NEGATIVE = 'negative';
exports.RANGE_NEGATIVE = RANGE_NEGATIVE;
const RANGE_INDEX = 'index';
exports.RANGE_INDEX = RANGE_INDEX;
const RANGE_NON_ZERO = 'nonZero';
exports.RANGE_NON_ZERO = RANGE_NON_ZERO;
const mapRegex = {
  [RANGE_POSITIVE]: regexPos,
  [RANGE_INDEX]: regexIndex,
  [RANGE_NEGATIVE]: regexNeg,
  [RANGE_NON_ZERO]: regexNonZero
};
const isInteger = (value, options) => {
  options = {
    range: 'all',
    ...options
  };
  const type = typeof value;
  if (type === 'number') {
    return Number.isInteger(value);
  } else if (type === 'string') {
    value = value.trim();
    const regex = mapRegex[options.range] || regexInt;
    if (regex.test(value)) {
      return true;
    }
  }
  return false;
};
var _default = isInteger;
exports.default = _default;
//# sourceMappingURL=isInteger.js.map
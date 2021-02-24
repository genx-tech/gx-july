"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = zipAndFlat;

/**
 * One-by-one merge two arrays into one
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array}
 */
function zipAndFlat(arr1, arr2) {
  var long,
      result = [],
      ll,
      ls;
  var l1 = arr1 == null ? 0 : arr1.length;
  var l2 = arr2 == null ? 0 : arr2.length;

  if (l2 > l1) {
    ll = l2;
    ls = l1;
    long = arr2;
  } else {
    ll = l1;
    ls = l2;
    long = arr1;
  }

  for (var i = 0; i < ls; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }

  for (var _i = ls; _i < ll; _i++) {
    result.push(long[_i]);
  }

  return result;
}
//# sourceMappingURL=zipAndFlat.js.map
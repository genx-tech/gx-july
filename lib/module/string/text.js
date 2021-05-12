"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceAll = exports.dropIfStartsWith = exports.dropIfEndsWith = exports.ensureStartsWith = exports.ensureEndsWith = void 0;

var ensureEndsWith = function ensureEndsWith(str, ending) {
  return str.endsWith(ending) ? str : str + ending;
};

exports.ensureEndsWith = ensureEndsWith;

var ensureStartsWith = function ensureStartsWith(str, starting) {
  return str.startsWith(starting) ? str : starting + str;
};

exports.ensureStartsWith = ensureStartsWith;

var dropIfEndsWith = function dropIfEndsWith(str, ending) {
  return str.endsWith(ending) ? str.substr(0, str.length - ending.length) : str;
};

exports.dropIfEndsWith = dropIfEndsWith;

var dropIfStartsWith = function dropIfStartsWith(str, starting) {
  return str.startsWith(starting) ? str.substr(starting.length) : str;
};
/**
 * Replace all occurance of "search" with "replacement" in a string.
 * 3.5x faster than String.replaceall
 * @param {*} str
 * @param {*} search
 * @param {*} replacement
 * @see [benchmark]{@link https://www.measurethat.net/Benchmarks/Show/11267/0/string-replace-all}
 */


exports.dropIfStartsWith = dropIfStartsWith;

var replaceAll = function replaceAll(str, search, replacement) {
  return str.split(search).join(replacement);
};

exports.replaceAll = replaceAll;
//# sourceMappingURL=text.js.map
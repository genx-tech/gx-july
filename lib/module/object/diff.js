"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _reduce2 = _interopRequireDefault(require("lodash/reduce"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _differenceWith2 = _interopRequireDefault(require("lodash/differenceWith"));

var _ifThen = _interopRequireDefault(require("../lang/ifThen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var arrayOperators = [function () {
  return [];
}, function (array, k, v) {
  return array.push(v);
}];
var objectOperators = [function () {
  return {};
}, function (obj, k, v) {
  return obj[k] = v;
}];

function _diff(base, object, creator, setter) {
  return (0, _reduce2.default)(object, function (re, v, k) {
    var vb = base[k];

    var tb = _typeof(vb);

    var to = _typeof(v);

    if (tb !== to) {
      // different type at all
      setter(re, k, v);
    } else if (_typeof(vb) === 'object') {
      // both are object
      if (Array.isArray(vb)) {
        // both are array
        var avd = (0, _differenceWith2.default)(v, vb, _isEqual2.default);

        if (avd.length > 0) {
          setter(re, k, avd);
        }
      } else if (!(0, _isEqual2.default)(vb, v)) {
        // object
        var baseIsEmpty = (0, _isEmpty2.default)(vb);

        if ((0, _isEmpty2.default)(v)) {
          if (!baseIsEmpty) {
            setter(re, k, v);
          }
        } else {
          if (baseIsEmpty) {
            setter(re, k, v);
          } else {
            // both not empty
            var vd = _diff(vb, v, objectOperators[0], objectOperators[1]);

            if (!(0, _isEmpty2.default)(vd)) {
              setter(re, k, vd);
            }
          }
        }
      }
    } else if (vb !== v) {
      setter(re, k, v);
    }

    return re;
  }, creator());
}
/**
 * Deep diff between two object
 * @alias object.difference
 * @param  {Object} base - Object to be compared
 * @param  {Object} object - Object compared
 * @return {Object} Return the key-value pair from object which of the value is different from base with the same key, or undefined if no difference
 */


function difference(base, object) {
  var ops = Array.isArray(base) ? arrayOperators : objectOperators;
  var baseIsEmpty = (0, _isEmpty2.default)(base);
  return (0, _isEmpty2.default)(object) ? baseIsEmpty ? undefined : object : baseIsEmpty ? object : (0, _ifThen.default)(_diff(base, object, ops[0], ops[1]), _isEmpty2.default, undefined);
}

var _default = difference;
exports.default = _default;
//# sourceMappingURL=diff.js.map
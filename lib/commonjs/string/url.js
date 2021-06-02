"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.join = join;
exports.appendQuery = appendQuery;
exports.queryStringToObject = queryStringToObject;
exports.objectToQueryString = objectToQueryString;

var _text = require("./text");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Join base url and the extra url path.
 * @function module:url.join
 * @param {string} base
 * @param {string} extraPath
 * @returns {string}
 */
function join(base, extraPath) {
  for (var _len = arguments.length, more = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    more[_key - 2] = arguments[_key];
  }

  if (more && more.length > 0) {
    return more.reduce(function (result, part) {
      return join(result, part);
    }, join(base, extraPath));
  }

  return base ? extraPath ? (0, _text.dropIfEndsWith)(base, '/') + (0, _text.ensureStartsWith)(extraPath, '/') : base : extraPath;
}
/**
 * Merge the query parameters into given url.
 * @function module:url.appendQuery
 * @param {string} url - Original url.
 * @param {object} query - Key-value pairs query object to be merged into the url.
 * @returns {string}
 */


function appendQuery(url, query) {
  if (!query) return url;
  var posQM = url.indexOf('?');

  if (posQM === -1) {
    if (typeof query !== 'string') {
      query = objectToQueryString(query);
    }

    return query ? url + '?' + query : url;
  }

  var _url$split = url.split('?', 2),
      _url$split2 = _slicedToArray(_url$split, 2),
      base = _url$split2[0],
      qs = _url$split2[1];

  var previousObj = queryStringToObject(qs);
  var newObj = typeof query === 'string' ? queryStringToObject(query) : query;
  var newQs = objectToQueryString(_objectSpread(_objectSpread({}, previousObj), newObj));
  return newQs ? base + '?' + newQs : url;
}
/**
 * Parse query string into key-value pairs.
 * @function module:url.queryStringToObject
 * @param {string} qs
 * @returns {object}
 */


function queryStringToObject(qs) {
  if (!qs) {
    return {};
  }

  var query = qs[0] === '?' ? qs.substr(1) : qs;
  var parts = query.split('&');
  return parts.reduce(function (r, pair) {
    var _pair$split = pair.split('='),
        _pair$split2 = _slicedToArray(_pair$split, 2),
        k = _pair$split2[0],
        v = _pair$split2[1];

    r[decodeURIComponent(k)] = v == null ? null : decodeURIComponent(v);
    return r;
  }, {});
}
/**
 * Stringify an object into url query string.
 * @function module:url.objectToQueryString
 * @param {*} obj
 * @returns {string}
 */


function objectToQueryString(obj) {
  var parts = [];

  for (var k in obj) {
    var v = obj[k];
    var part = v == null ? encodeURIComponent(k) : "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(v));
    parts.push(part);
  }

  return parts.join('&');
}
//# sourceMappingURL=url.js.map
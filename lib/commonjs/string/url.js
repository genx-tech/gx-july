"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.join = join;
exports.appendQuery = appendQuery;
exports.queryStringToObject = queryStringToObject;
exports.objectToQueryString = objectToQueryString;

var _text = require("./text");

/**
 * Join base url and the extra url path.
 * @function module:url.join
 * @param {string} base
 * @param {string} extraPath
 * @returns {string}
 */
function join(base, extraPath) {
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
  const posQM = url.indexOf('?');

  if (posQM === -1) {
    if (typeof query !== 'string') {
      query = objectToQueryString(query);
    }

    return query ? url + '?' + query : url;
  }

  const [base, qs] = url.split('?', 2);
  const previousObj = queryStringToObject(qs);
  const newObj = typeof query === 'string' ? queryStringToObject(query) : query;
  const newQs = objectToQueryString({ ...previousObj,
    ...newObj
  });
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

  const query = qs[0] === '?' ? qs.substr(1) : qs;
  const parts = query.split('&');
  return parts.reduce((r, pair) => {
    const [k, v] = pair.split('=');
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
  let parts = [];

  for (let k in obj) {
    const v = obj[k];
    const part = v == null ? encodeURIComponent(k) : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`;
    parts.push(part);
  }

  return parts.join('&');
}
//# sourceMappingURL=url.js.map
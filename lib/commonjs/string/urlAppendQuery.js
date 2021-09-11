"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urlObjectToQueryString = _interopRequireDefault(require("./urlObjectToQueryString"));

var _urlQueryStringToObject = _interopRequireDefault(require("./urlQueryStringToObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Merge the query parameters into given url.
 * @function string.urlAppendQuery
 * @param {String} url - Original url.
 * @param {Object} query - Key-value pairs query object to be merged into the url.
 * @returns {String}
 */
function appendQuery(url, query) {
  if (!query) return url;
  const posQM = url.indexOf('?');

  if (posQM === -1) {
    if (typeof query !== 'string') {
      query = (0, _urlObjectToQueryString.default)(query);
    }

    return query ? url + '?' + query : url;
  }

  const [base, qs] = url.split('?', 2);
  const previousObj = (0, _urlQueryStringToObject.default)(qs);
  const newObj = typeof query === 'string' ? (0, _urlQueryStringToObject.default)(query) : query;
  const newQs = (0, _urlObjectToQueryString.default)({ ...previousObj,
    ...newObj
  });
  return newQs ? base + '?' + newQs : url;
}

var _default = appendQuery;
exports.default = _default;
//# sourceMappingURL=urlAppendQuery.js.map
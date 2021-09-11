/**
 * Stringify an object into url query string.
 * @function string.urlObjectToQueryString
 * @param {Object} obj
 * @returns {String}
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

export default objectToQueryString;
//# sourceMappingURL=urlObjectToQueryString.js.map
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
        let part = encodeURIComponent(k);
        if (v != null) {
            part += '=' + encodeURIComponent(v);
        }

        parts.push(part);
    }

    return parts.join('&');
}

export default objectToQueryString;

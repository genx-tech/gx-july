import { dropIfEndsWith, ensureStartsWith } from './text';

/**
 * Join base url and the extra url path.
 * @function module:url.join
 * @param {string} base
 * @param {string} extraPath
 * @returns {string}
 */
export function join(base, extraPath, ...more) {
    if (more && more.length > 0) {
        return more.reduce((result, part) => join(result, part), join(base, extraPath));
    } 

    return base
        ? extraPath
            ? dropIfEndsWith(base, '/') + ensureStartsWith(extraPath, '/')
            : base
        : extraPath;
}

/**
 * Merge the query parameters into given url.
 * @function module:url.appendQuery
 * @param {string} url - Original url.
 * @param {object} query - Key-value pairs query object to be merged into the url.
 * @returns {string}
 */
export function appendQuery(url, query) {
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
    const newObj =
        typeof query === 'string' ? queryStringToObject(query) : query;

    const newQs = objectToQueryString({ ...previousObj, ...newObj });

    return newQs ? base + '?' + newQs : url;
}

/**
 * Parse query string into key-value pairs.
 * @function module:url.queryStringToObject
 * @param {string} qs
 * @returns {object}
 */
export function queryStringToObject(qs) {
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
export function objectToQueryString(obj) {
    let parts = [];

    for (let k in obj) {
        const v = obj[k];
        const part =
            v == null
                ? encodeURIComponent(k)
                : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`;
        parts.push(part);
    }

    return parts.join('&');
}

import { replaceAll } from './index';

/**
 * Unquote a string
 * @param {String} str
 * @param {boolean} [unescape=false] - True to unescape slashed quote, default false
 * @param {Set} [quoteSet] - Set of chars
 */
const unquote = (str, unescape, quoteSet) => {
    if (typeof str !== 'string') {
        return str;
    }

    if (str.length < 2) {
        return str;
    }

    let start = str[0];
    if (start !== str[str.length - 1]) {
        return str;
    }

    if (quoteSet && !quoteSet.has(start)) {
        return str;
    }

    str = str.slice(1, -1);

    if (unescape) {
        return replaceAll(str, '\\' + start, start);
    }

    return str;
};

export default unquote;

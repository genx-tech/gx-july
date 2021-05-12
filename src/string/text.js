export const ensureEndsWith = (str, ending) =>
    str.endsWith(ending) ? str : str + ending;

export const ensureStartsWith = (str, starting) =>
    str.startsWith(starting) ? str : starting + str;

export const dropIfEndsWith = (str, ending) =>
    str.endsWith(ending) ? str.substr(0, str.length-ending.length) : str;

export const dropIfStartsWith = (str, starting) =>
    str.startsWith(starting) ? str.substr(starting.length) : str;


/**
 * Replace all occurance of "search" with "replacement" in a string.
 * 3.5x faster than String.replaceall
 * @param {*} str
 * @param {*} search
 * @param {*} replacement
 * @see [benchmark]{@link https://www.measurethat.net/Benchmarks/Show/11267/0/string-replace-all}
 */
export const replaceAll = (str, search, replacement) =>
    str.split(search).join(replacement);


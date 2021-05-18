/**
 * Ensure a string ends with *ending*
 * @function module:text.ensureEndsWith
 * @param {*} str 
 * @param {*} ending 
 * @returns {string}
 */
export const ensureEndsWith = (str, ending) =>
    str.endsWith(ending) ? str : str + ending;

/**
 * Ensure a string starts with *starting*
 * @function module:text.ensureStartsWith
 * @param {*} str 
 * @param {*} ending 
 * @returns {string}
 */
export const ensureStartsWith = (str, starting) =>
    str.startsWith(starting) ? str : starting + str;

/**
 * Drop a right part of a string if it ends with *ending*
 * @function module:text.dropIfEndsWith
 * @param {*} str 
 * @param {*} ending 
 * @returns {string}
 */    
export const dropIfEndsWith = (str, ending) =>
    str.endsWith(ending) ? str.substr(0, str.length-ending.length) : str;

/**
 * Drop a left part of a string if it starts with *starting*
 * @function module:text.dropIfStartsWith
 * @param {*} str 
 * @param {*} starting 
 * @returns {string}
 */     
export const dropIfStartsWith = (str, starting) =>
    str.startsWith(starting) ? str.substr(starting.length) : str;

/**
 * Replace all occurance of "search" with "replacement" in a string.
 * 3.5x faster than String.replaceAll
 * @function module:text.replaceAll
 * @param {*} str
 * @param {*} search
 * @param {*} replacement
 * @see [benchmark]{@link https://www.measurethat.net/Benchmarks/Show/11267/0/string-replace-all}
 */
export const replaceAll = (str, search, replacement) =>
    str.split(search).join(replacement);


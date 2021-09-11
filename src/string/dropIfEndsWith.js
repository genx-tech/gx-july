/**
 * Drop a right part of a string if it ends with *ending*
 * @function string.dropIfEndsWith
 * @param {String} str
 * @param {String} ending
 * @returns {String}
 */
const dropIfEndsWith = (str, ending) =>
    str.endsWith(ending) ? str.substr(0, str.length - ending.length) : str;

export default dropIfEndsWith;

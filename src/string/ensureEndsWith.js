/**
 * Ensure a string ends with *ending*
 * @function string.ensureEndsWith
 * @param {String} str
 * @param {String} ending
 * @returns {String}
 */
const ensureEndsWith = (str, ending) =>
    str.endsWith(ending) ? str : str + ending;

export default ensureEndsWith;

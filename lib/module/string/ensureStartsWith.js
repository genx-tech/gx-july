/**
 * Ensure a string starts with *starting*
 * @function string.ensureStartsWith
 * @param {String} str
 * @param {String} starting
 * @returns {String}
 */
const ensureStartsWith = (str, starting) => str.startsWith(starting) ? str : starting + str;

export default ensureStartsWith;
//# sourceMappingURL=ensureStartsWith.js.map
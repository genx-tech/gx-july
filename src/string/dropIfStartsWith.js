/**
 * Drop a left part of a string if it starts with *starting*
 * @function srting.dropIfStartsWith
 * @param {String} str
 * @param {String} starting
 * @returns {String}
 */
const dropIfStartsWith = (str, starting) =>
    str.startsWith(starting) ? str.substr(starting.length) : str;

export default dropIfStartsWith;

import replaceAll from './replaceAll';

/**
 * Quote a string.
 * @function string.quote
 * @param {String} str
 * @param {String} [quoteChar=']
 * @returns {String}
 */
function quote(str) {
  let quoteChar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '"';
  return quoteChar + replaceAll(str, quoteChar, '\\' + quoteChar) + quoteChar;
}
export default quote;
//# sourceMappingURL=quote.js.map
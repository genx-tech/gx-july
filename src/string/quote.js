import { replaceAll } from './text';

/**
 * Quote a string.
 * @param {string} str
 * @param {string} quoteChar
 * @returns {string}
 */
function quote(str, quoteChar = '"') {
    return quoteChar + replaceAll(str, quoteChar, "\\" + quoteChar) + quoteChar;
}

export default quote;
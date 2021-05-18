import _range from 'lodash/range';

/**
 * Bin to hex, like 0x7F
 * @alias string.bin2Hex
 * @param {binary} bin
 * @returns {string}
 */
function bin2Hex(bin) {
    bin = bin.toString();
    return '0x' + _range(bin.length).map(i => bin.charCodeAt(i).toString(16)).join('');
}

export default bin2Hex;
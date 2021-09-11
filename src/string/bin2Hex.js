import _range from 'lodash/range';

/**
 * Bin to hex, like 0x7F
 * @function string.bin2Hex
 * @param {Buffer} bin
 * @returns {String}
 */
function bin2Hex(bin) {
    bin = bin.toString();
    return (
        '0x' +
        _range(bin.length)
            .map((i) => bin.charCodeAt(i).toString(16))
            .join('')
    );
}

export default bin2Hex;

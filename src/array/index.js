/**
 * Insert a separator as element into an array.
 * @param {Array} arr
 * @param {*} separator
 */
export const insertBetween = (arr, separator) =>
    arr
        .map((e, i) => (i < arr.length - 1 ? [e, separator] : [e]))
        .reduce((a, b) => [...a, b], []);

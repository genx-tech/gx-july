/**
 * Remap the keys of object elements in an array, like projection.
 * @param {*} object
 * @param {integer} [n=1] - The number of k-v pair to take.
 */
function take(object, n) {
    n == null && (n = 1);

    let result = {},
        i = 0;

    for (let k in object) {
        if (i++ < n) {
            result[k] = object[k];
        } else {
            break;
        }
    }

    return result;
}

export default take;

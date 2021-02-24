import _each from 'lodash/each';

/**
 * Remap the keys of object elements in an array, like projection.
 * @param {*} object
 * @param {*} mapping - key to newKey or key to array[ newKey, valueMap ] for next level mapping
 * @param {boolean} keepUnmapped - If true, will keep those not in mapping as its original key, otherwise filter out
 */
function remap(object, mapping, keepUnmapped) {
    if (typeof mapping === 'string') return { [mapping]: object };

    let newObj = {};
    _each(object, (v, k) => {
        if (Object.prototype.hasOwnProperty.call(mapping, k)) {
            let nk = mapping[k];
            if (Array.isArray(nk)) {
                newObj[nk[0]] = {
                    ...newObj[nk[0]],
                    ...remap(v, nk[1], keepUnmapped),
                };
            } else {
                newObj[nk] = v;
            }
        } else {
            if (keepUnmapped) {
                newObj[k] = v;
            }
        }
    });

    return newObj;
}

export default remap;

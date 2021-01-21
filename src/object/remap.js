/**
 * Remap the keys of object elements in an array, like projection.
 * @param {*} object
 * @param {*} mapping - key to newKey or key to array[ newKey, valueMap ] for next level mapping
 * @param {boolean} keepUnmapped - If true, will keep those not in mapping as its original key, otherwise filter out
 */
function remap(object, mapping, keepUnmapped) {
    if (typeof mapping === 'string') return { [mapping]: object };

    let newObj = {};
    Object.entries(object).map(([k, v]) => {
        if (k in mapping) {
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

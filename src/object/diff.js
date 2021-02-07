import isEqual from 'lodash/isEqual';
/**
 * Deep diff between two object
 * @param  {Object} base - Object to be compared
 * @param  {Object} object - Object compared
 * @return {Object} Return the key-value pair from object which of the value is different from base with the same key
 */
function difference(base, object) {
    return Object.entries(object).reduce((re, [k, v]) => {
        const vb = base[k];

        if (!isEqual(vb, v)) {
            re[k] =
                typeof v === 'object' && typeof vb === 'object'
                    ? difference(vb, v)
                    : v;
        }

        return re;
    }, {});
}

export default difference;

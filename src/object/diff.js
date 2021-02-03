import isEqual from 'lodash/isEqual';
/**
 * Deep diff between two object
 * @param  {Object} object - Object compared
 * @param  {Object} base - Object to be compared
 * @return {Object} Return the key-value pair from object 2 which of the value is different from object 1 with the same key
 */
function difference(object, base) {
    return Object.entries(object).reduce((re, [k, v]) => {
        const v2 = base[k];

        if (!isEqual(v, base[k])) {
            re[k] =
                typeof v === 'object' && typeof v2 === 'object'
                    ? difference(v, v2)
                    : v;
        }

        return re;
    }, {});
}

export default difference;

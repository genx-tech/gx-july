import _each from 'lodash/each';
import isPlainObject from './isPlainObject';

/**
 * Convert a hierachy object into a flat object with the key path sperarated by a given string, default as ".".
 * @param {*} object
 * @param {*} keyPathSep
 * @returns {object}
 */
const flattenObject = (object, keyPathSep = '.') => {
    const result = {};

    _each(object, (v, k) => {
        if (isPlainObject(v)) {
            v = flattenObject(v, keyPathSep);
            _each(v, (v2, k2) => {
                result[k + keyPathSep + k2] = v2;
            });
        } else {
            result[k] = v;
        }
    });

    return result;
};

export default flattenObject;

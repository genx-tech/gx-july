/**
 * Get a value by dot-separated path or key array from a collection
 *  different from lodash/get)
 * @param {object} collection - The collection
 * @param {string|array} keyPath - A dot-separated path (dsp) or a key array, e.g. settings.xxx.yyy, or ['setting', 'xxx', 'yyy']
 * @param {object} [defaultValue] - The default value if the path does not exist
 * @returns {*}
 */
const _get = (collection, keyPath, defaultValue) => {
    if (keyPath == null) {
        return collection ?? defaultValue;
    }
    let nodes = Array.isArray(keyPath) ? keyPath : keyPath.split('.');

    if (collection == null) {
        return defaultValue;
    }

    let index = 0;
    const length = nodes.length;

    while (collection != null && index < length) {
        collection = collection[nodes[index++]];
    }

    return collection != null && index && index == length ? collection : defaultValue;
};

export default _get;

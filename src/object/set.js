/**
 * Set a value by dot-separated path or key array into a collection
 * @param {object} collection - The collection
 * @param {string} keyPath - A dot-separated path (dsp) or a key array, e.g. settings.xxx.yyy, or ['setting', 'xxx', 'yyy']
 * @param {object} value - The default value if the path does not exist
 * @returns {*}
 */
const _set = (collection, keyPath, value) => {
    if (collection == null || typeof collection !== 'object') {
        return collection;
    }

    if (keyPath == null) {
        return collection;
    }

    let nodes = Array.isArray(keyPath) ? keyPath.concat() : keyPath.split('.');
    const length = nodes.length;

    if (length > 0) {
        const lastIndex = length - 1;

        let index = 0;
        let nested = collection;

        while (nested != null && index < lastIndex) {
            const key = nodes[index++];

            let next = nested[key];
            if (typeof next !== 'object') {
                next = nested[key] = {};
            }
            nested = next;
        }

        nested[nodes[lastIndex]] = value;
    }

    return collection;
};

export default _set;

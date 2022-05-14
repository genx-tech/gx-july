import _map from 'lodash/map';
import _get from './get';

/**
 * Convert a k-v paired object into an array pair-by-pair.
 * @alias object.objectToArray
 * @param {*} object
 * @param {*} keyNaming
 * @param {*} valueNaming
 * @returns {array}
 */
const objectToArray = (object, keyNaming, valueNaming, valuePath) => {
    keyNaming ?? (keyNaming = 'name');
    valueNaming ?? (valueNaming = 'value');

    return _map(object, (v, k) => ({ [keyNaming]: k, [valueNaming]: valuePath ? _get(v, valuePath) : v }));
};

export default objectToArray;

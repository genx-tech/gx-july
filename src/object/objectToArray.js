import _map from 'lodash/map';

/**
 * Convert a k-v paired object into an array pair-by-pair.
 * @alias object.objectToArray 
 * @param {*} object 
 * @param {*} keyNaming 
 * @param {*} valueNaming 
 * @returns {array}
 */
const objectToArray = (object, keyNaming, valueNaming) => {
    keyNaming ??= "name";
    valueNaming ??= "value";

    return _map(object, (v, k) => ({ [keyNaming]: k, [valueNaming]: v }));
}

export default objectToArray;

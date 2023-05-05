import _each from 'lodash/each';
import isPlainObject from './isPlainObject';
import set from './set';
const unflattenObject = function (object) {
  let keyPathSep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';
  if (!isPlainObject(object)) {
    throw new Error('The argument is not an object.');
  }
  const options = {
    numberAsArrayIndex: true,
    keyPathSeparator: keyPathSep
  };
  const result = {};
  _each(object, (v, k) => {
    set(result, k, v, options);
  });
  return result;
};
export default unflattenObject;
//# sourceMappingURL=unflattenObject.js.map
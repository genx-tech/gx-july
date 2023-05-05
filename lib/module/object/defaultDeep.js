import filterNull from './filterNull';

/**
 * Fallback to default value according to the sequence of sources, if the value of a key in all sources is null or undefined.
 * @param {object} obj - immutable object.
 * @param  {...object} sources
 * @returns {object} Merged object.
 */
function defaultDeep(obj) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  return [...sources, obj].reduce((merged, newSource) => ({
    ...merged,
    ...filterNull(newSource)
  }), {});
}
export default defaultDeep;
//# sourceMappingURL=defaultDeep.js.map
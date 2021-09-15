"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _findKeyAsync_ = _interopRequireDefault(require("./findKeyAsync_"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Iterate a collection asynchronously until predicate returns true
 * The returned value is undefined if not found.
 * That's different from the _.find() function in lodash.
 * @alias collection.findAsync_
 * @async
 * @param {Array|Object} obj
 * @param {asyncIterator} asyncPredicate_
 * @returns {Promise.<Object|undefined>}
 */
async function findAsync_(obj, asyncPredicate_) {
  const k = await (0, _findKeyAsync_.default)(obj, asyncPredicate_);
  return obj[k];
}

var _default = findAsync_;
exports.default = _default;
//# sourceMappingURL=findAsync_.js.map
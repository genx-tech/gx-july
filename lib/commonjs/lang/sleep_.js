"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Sleep for milliseconds
 * @alias lang.sleep_
 * @async
 * @param {integer} ms - milliseconds
 * @returns {Promise}
 */
const sleep_ = ms => new Promise((resolve
/*, reject*/
) => {
  setTimeout(resolve, ms);
});

var _default = sleep_;
exports.default = _default;
//# sourceMappingURL=sleep_.js.map
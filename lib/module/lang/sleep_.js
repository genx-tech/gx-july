"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Sleep for milliseconds
 * @alias lang.sleep_
 * @param {*} ms 
 * @returns {Promise}
 */
var sleep_ = function sleep_(ms) {
  return new Promise(function (resolve
  /*, reject*/
  ) {
    setTimeout(resolve, ms);
  });
};

var _default = sleep_;
exports.default = _default;
//# sourceMappingURL=sleep_.js.map
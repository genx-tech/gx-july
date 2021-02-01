"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.join = join;

var _index = require("./index");

/**
 * Join base url and the extra url path
 * @param  {String} base
 * @param  {String} extraPath
 */
function join(base, extraPath) {
  return base ? extraPath ? (0, _index.dropIfEndsWith)(base, '/') + (0, _index.ensureStartsWith)(extraPath, '/') : base : extraPath;
}
//# sourceMappingURL=url.js.map
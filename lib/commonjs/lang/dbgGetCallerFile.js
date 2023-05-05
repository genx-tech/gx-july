"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function dbgGetCallerFile(depth = 1) {
  const originalFunc = Error.prepareStackTrace;
  let callerfile;
  try {
    const err = new Error();
    let currentfile;
    let currentDepth = 0;
    Error.prepareStackTrace = function (err, stack) {
      return stack;
    };
    currentfile = err.stack.shift().getFileName();
    while (err.stack.length) {
      callerfile = err.stack.shift().getFileName();
      if (currentfile !== callerfile) {
        currentDepth++;
        currentfile = callerfile;
        if (currentDepth > depth) break;
      }
    }
  } finally {}
  Error.prepareStackTrace = originalFunc;
  return callerfile;
}
var _default = dbgGetCallerFile;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=dbgGetCallerFile.js.map
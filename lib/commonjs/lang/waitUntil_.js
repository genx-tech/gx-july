"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sleep_ = _interopRequireDefault(require("./sleep_"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function waitUntil_(checker, checkInterval = 1000, maxRounds = 10) {
  let result = await checker();
  if (result) return result;
  let counter = 0;

  do {
    await (0, _sleep_.default)(checkInterval);
    result = await checker();

    if (result) {
      break;
    }
  } while (++counter < maxRounds);

  return result;
}

var _default = waitUntil_;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=waitUntil_.js.map
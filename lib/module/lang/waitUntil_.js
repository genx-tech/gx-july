"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = waitUntil_;

var _sleep_ = _interopRequireDefault(require("./sleep_"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Run the checker every given duration for certain rounds until the checker returns non-false value.
 * @param {Function} checker - predicator
 * @param {integer} [checkInterval=1000]
 * @param {integer} [maxRounds=10]
 * @returns {Promise.<boolean>}
 */
function waitUntil_(_x) {
  return _waitUntil_.apply(this, arguments);
}

function _waitUntil_() {
  _waitUntil_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(checker) {
    var checkInterval,
        maxRounds,
        result,
        counter,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            checkInterval = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1000;
            maxRounds = _args.length > 2 && _args[2] !== undefined ? _args[2] : 10;
            _context.next = 4;
            return checker();

          case 4:
            result = _context.sent;

            if (!result) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", result);

          case 7:
            counter = 0;

          case 8:
            _context.next = 10;
            return (0, _sleep_.default)(checkInterval);

          case 10:
            _context.next = 12;
            return checker();

          case 12:
            result = _context.sent;

            if (!result) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("break", 16);

          case 15:
            if (++counter < maxRounds) {
              _context.next = 8;
              break;
            }

          case 16:
            return _context.abrupt("return", result);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _waitUntil_.apply(this, arguments);
}
//# sourceMappingURL=waitUntil_.js.map
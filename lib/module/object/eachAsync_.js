"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isPlainObject = _interopRequireDefault(require("./isPlainObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Iterate an array of an object asynchronously
 * @alias object.eachAsync_
 * @param {Array|Object} obj
 * @param {asyncIterator} iterator
 * @returns {Promise.<Array|Object>}
 */
function eachAsync_(_x, _x2) {
  return _eachAsync_.apply(this, arguments);
}

function _eachAsync_() {
  _eachAsync_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(obj, iterator) {
    var r, l, i, _r, k;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!Array.isArray(obj)) {
              _context.next = 16;
              break;
            }

            r = [];
            l = obj.length;
            i = 0;

          case 4:
            if (!(i < l)) {
              _context.next = 13;
              break;
            }

            _context.t0 = r;
            _context.next = 8;
            return iterator(obj[i], i, obj);

          case 8:
            _context.t1 = _context.sent;

            _context.t0.push.call(_context.t0, _context.t1);

          case 10:
            i++;
            _context.next = 4;
            break;

          case 13:
            return _context.abrupt("return", r);

          case 16:
            if (!(0, _isPlainObject.default)(obj)) {
              _context.next = 30;
              break;
            }

            _r = {};
            _context.t2 = regeneratorRuntime.keys(obj);

          case 19:
            if ((_context.t3 = _context.t2()).done) {
              _context.next = 27;
              break;
            }

            k = _context.t3.value;

            if (!Object.prototype.hasOwnProperty.call(obj, k)) {
              _context.next = 25;
              break;
            }

            _context.next = 24;
            return iterator(obj[k], k, obj);

          case 24:
            _r[k] = _context.sent;

          case 25:
            _context.next = 19;
            break;

          case 27:
            return _context.abrupt("return", _r);

          case 30:
            return _context.abrupt("return", Promise.reject('Invalid argument!'));

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _eachAsync_.apply(this, arguments);
}

var _default = eachAsync_;
exports.default = _default;
//# sourceMappingURL=eachAsync_.js.map
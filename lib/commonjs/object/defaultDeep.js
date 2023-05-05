"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _filterNull = _interopRequireDefault(require("./filterNull"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defaultDeep(obj, ...sources) {
  return [...sources, obj].reduce((merged, newSource) => ({ ...merged,
    ...(0, _filterNull.default)(newSource)
  }), {});
}

var _default = defaultDeep;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=defaultDeep.js.map
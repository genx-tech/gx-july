"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toPath = exports.makePath = void 0;
const toPath = (p, keyPathSeparator = '.') => p == null ? [] : typeof p === 'string' ? p.split(keyPathSeparator) : Array.isArray(p) ? p : [p];
exports.toPath = toPath;
const makePath = (part1, part2, keyPathSeparator = '.') => [...toPath(part1, keyPathSeparator), ...toPath(part2, keyPathSeparator)];
exports.makePath = makePath;
//# sourceMappingURL=pathUtils.js.map
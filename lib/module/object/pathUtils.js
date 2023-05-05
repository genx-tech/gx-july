export const toPath = function (p) {
  let keyPathSeparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';
  return p == null ? [] : typeof p === 'string' ? p.split(keyPathSeparator) : Array.isArray(p) ? p : [p];
};
export const makePath = function (part1, part2) {
  let keyPathSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  return [...toPath(part1, keyPathSeparator), ...toPath(part2, keyPathSeparator)];
};
//# sourceMappingURL=pathUtils.js.map
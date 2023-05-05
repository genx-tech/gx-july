export const toPath = (p, keyPathSeparator = '.') =>
    p == null ? [] : typeof p === 'string' ? p.split(keyPathSeparator) : Array.isArray(p) ? p : [p];
export const makePath = (part1, part2, keyPathSeparator = '.') => [
    ...toPath(part1, keyPathSeparator),
    ...toPath(part2, keyPathSeparator),
];

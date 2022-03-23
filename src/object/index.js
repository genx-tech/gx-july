export { default as isPlainObject } from './isPlainObject';
export { default as remap } from './remap';
export { default as diff } from './diff';
export { default as take } from './take';
export { default as pushIntoBucket } from './pushIntoBucket';
export { default as get } from './get';
export { default as set } from './set';
export { default as cowSet } from './cowSet';
export { default as objectToArray } from './objectToArray';
export { default as flattenObject } from './flattenObject';
export { default as unflattenObject } from './unflattenObject';

export const toPath = (p, keyPathSeparator = '.') =>
    p == null ? [] : typeof p === 'string' ? p.split(keyPathSeparator) : Array.isArray(p) ? p : [p];
export const makePath = (part1, part2, keyPathSeparator = '.') => [
    ...toPath(part1, keyPathSeparator),
    ...toPath(part2, keyPathSeparator),
];

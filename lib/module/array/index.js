export { default as insertBetween } from './insertBetween';
export { default as zipAndFlat } from './zipAndFlat';
export { default as arrayToObject } from './arrayToObject';
/**
 * Some immutable array helpers!
 */

export const move = (array, from, to) => {
  const copy = copyArrayLike(array);
  const value = copy[from];
  copy.splice(from, 1);
  copy.splice(to, 0, value);
  return copy;
};
export const swap = (arrayLike, indexA, indexB) => {
  const copy = copyArrayLike(arrayLike);
  const a = copy[indexA];
  copy[indexA] = copy[indexB];
  copy[indexB] = a;
  return copy;
};
export const insert = (arrayLike, index, value) => {
  const copy = copyArrayLike(arrayLike);
  copy.splice(index, 0, value);
  return copy;
};
export const copyArrayLike = arrayLike => {
  if (!arrayLike) {
    return [];
  } else {
    return [...arrayLike];
  }
};
export const uniqPush = (arrayLike, value) => {
  if (!arrayLike.includes(value)) {
    return [...arrayLike, value];
  }

  return arrayLike;
};
//# sourceMappingURL=index.js.map
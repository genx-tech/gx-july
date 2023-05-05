const trimRight = (str, char) => {
  let l = str.length - 1;
  let i = l;
  for (; i > 0; i--) {
    if (str[i] !== char) break;
  }
  return i < l ? str : str.substring(0, i);
};
export default trimRight;
//# sourceMappingURL=trimRight.js.map
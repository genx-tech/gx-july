import quote from '../string/quote';

const arrayToCsv = function (data) {
  let separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';

  if (data == null) {
    return '';
  }

  if (!Array.isArray(data)) {
    throw new Error('The target argument should be an array.');
  }

  return data.map(elem => {
    elem = elem.toString();
    return elem.indexOf(separator) !== -1 ? quote(elem, '"') : elem;
  }).join(separator);
};

export default arrayToCsv;
//# sourceMappingURL=arrayToCsv.js.map
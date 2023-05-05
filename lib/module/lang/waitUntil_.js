import sleep_ from './sleep_';

/**
 * Run the checker every given duration for certain rounds until the checker returns non-false value.
 * @alias lang.waitUntil_
 * @async
 * @param {Function} checker - predicator
 * @param {integer} [checkInterval=1000]
 * @param {integer} [maxRounds=10]
 * @returns {Promise.<boolean>}
 */
async function waitUntil_(checker) {
  let checkInterval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  let maxRounds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  let result = await checker();
  if (result) return result;
  let counter = 0;
  do {
    await sleep_(checkInterval);
    result = await checker();
    if (result) {
      break;
    }
  } while (++counter < maxRounds);
  return result;
}
export default waitUntil_;
//# sourceMappingURL=waitUntil_.js.map
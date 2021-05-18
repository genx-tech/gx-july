/**
 * Sleep for milliseconds
 * @alias lang.sleep_
 * @param {*} ms 
 * @returns {Promise}
 */
const sleep_ = (ms) =>
    new Promise((resolve/*, reject*/) => {
        setTimeout(resolve, ms);
    });

export default sleep_;

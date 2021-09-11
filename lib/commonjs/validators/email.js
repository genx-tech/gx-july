"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const PRECISE_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const BASIC_PATTERN = /^\S+@\S+\.\S+$/;
/**
 * Validate an email address
 * @function validator.validateEmail
 * @param {String} value
 * @param {boolean} [precise=false]
 * @returns {boolean}
 */

const validateEmail = (value, precise) => {
  const pattern = precise ? PRECISE_PATTERN : BASIC_PATTERN;

  if (typeof value !== 'string') {
    return false;
  }

  if (!pattern.test(value)) {
    return false;
  }

  return true;
};

var _default = validateEmail;
exports.default = _default;
//# sourceMappingURL=email.js.map
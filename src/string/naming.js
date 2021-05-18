import _upperFirst from 'lodash/upperFirst';
import _camelCase from 'lodash/camelCase';

/**
 * Convert a string to kebab case
 * @function module:naming.kebabCase
 * @param {*} str 
 * @returns {string}
 */
export { default as kebabCase } from 'lodash/kebabCase';

/**
 * Convert a string to snake case
 * @function module:naming.snakeCase
 * @param {*} str 
 * @returns {string}
 */
export { default as snakeCase } from 'lodash/snakeCase';

/**
 * Convert a string to camel case
 * @function module:naming.camelCase
 * @param {*} str 
 * @returns {string}
 */
 export const camelCase = _camelCase;

/**
 * Convert a string to pascal case
 * @function module:naming.pascalCase
 * @param {*} str 
 * @returns {string}
 */
export const pascalCase = (str) => _upperFirst(_camelCase(str));

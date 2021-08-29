/**
 * @constant {lodash} _
 */

 export { default as _ } from 'lodash';

/**
 * @namespace lang
 */

export { default as ifThen } from './lang/ifThen';
export { default as hookInvoke } from './lang/hookInvoke';
export { default as sleep_ } from './lang/sleep_';
export { default as waitUntil_ } from './lang/waitUntil_';

/**
 * @namespace array
 */

export { default as insertBetween } from './array/insertBetween';
export { default as zipAndFlat } from './array/zipAndFlat';
export { default as arrayToObject } from './array/arrayToObject';

/**
 * @namespace object
 */

export { default as isPlainObject } from './object/isPlainObject'; 
export { default as remap } from './object/remap';
export { default as diff } from './object/diff';
export { default as take } from './object/take';
export { default as pushIntoBucket } from './object/pushIntoBucket';
export { default as get } from './object/get';
export { default as set } from './object/set';
export { default as objectToArray } from './object/objectToArray'; 

/**
 * @namespace collection
 */

export { default as eachAsync_ } from './collection/eachAsync_';
export { default as findAsync_ } from './collection/findAsync_';
export { default as filterAsync_ } from './collection/filterAsync_';

/**
 * @namespace string
 */

 export { default as quote } from './string/quote';
 export { default as unquote } from './string/unquote';
 export { default as bin2Hex } from './string/bin2Hex';
 export { default as template } from './string/template';

/** @module text */
export * as text from './string/text';
/** @module url */
export * as url from './string/url';
/** @module naming */
export * as naming from './string/naming';
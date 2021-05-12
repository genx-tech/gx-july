"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Add hooks before an object's method is being called and after.
 * @param {*} obj 
 * @param {*} onCalling - Before hook
 * @param {*} onCalled - After hook
 * @returns 
 */
var hookInvoke = function hookInvoke(obj, onCalling, onCalled) {
  return new Proxy(obj, {
    get: function get(target, propKey, receiver) {
      var origMethod = target[propKey];

      if (typeof origMethod === 'function') {
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          onCalling && Promise.resolve(onCalling(obj, {
            name: propKey,
            args: args
          }));
          var returned = origMethod.apply(target, args);
          onCalled && Promise.resolve(returned).then(function (returned) {
            return Promise.resolve(onCalled(obj, {
              name: propKey,
              returned: returned
            }));
          }).catch();
          return returned;
        };
      }

      return origMethod;
    }
  });
};

var _default = hookInvoke;
exports.default = _default;
//# sourceMappingURL=hookInvoke.js.map
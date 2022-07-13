"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const hookInvoke = (obj, onCalling, onCalled) => new Proxy(obj, {
  get(target, propKey) {
    const origMethod = target[propKey];

    if (typeof origMethod === 'function') {
      return function (...args) {
        onCalling && Promise.resolve(onCalling(obj, {
          name: propKey,
          args
        }));
        let returned = origMethod.apply(target, args);
        onCalled && Promise.resolve(returned).then(returned => Promise.resolve(onCalled(obj, {
          name: propKey,
          returned
        }))).catch();
        return returned;
      };
    }

    return origMethod;
  }

});

var _default = hookInvoke;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=hookInvoke.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _text = require("./text");
Object.keys(_text).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _text[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _text[key];
    }
  });
});
var _url = require("./url");
Object.keys(_url).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _url[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _url[key];
    }
  });
});
var _naming = require("./naming");
Object.keys(_naming).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _naming[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _naming[key];
    }
  });
});
//# sourceMappingURL=index.js.map
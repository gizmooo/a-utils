"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.easeInOutQuint = exports.easeOutQuint = exports.easeInQuint = exports.easeInOutQuart = exports.easeOutQuart = exports.easeInQuart = exports.easeInOutCubic = exports.easeOutCubic = exports.easeInCubic = exports.easeInOutQuad = exports.easeOutQuad = exports.easeInQuad = exports.linear = void 0;
var linear = function (t) { return t; };
exports.linear = linear;
var easeInQuad = function (t) { return t * t; };
exports.easeInQuad = easeInQuad;
var easeOutQuad = function (t) { return t * (2 - t); };
exports.easeOutQuad = easeOutQuad;
var easeInOutQuad = function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; };
exports.easeInOutQuad = easeInOutQuad;
var easeInCubic = function (t) { return t * t * t; };
exports.easeInCubic = easeInCubic;
var easeOutCubic = function (t) { return (--t) * t * t + 1; };
exports.easeOutCubic = easeOutCubic;
var easeInOutCubic = function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; };
exports.easeInOutCubic = easeInOutCubic;
var easeInQuart = function (t) { return t * t * t * t; };
exports.easeInQuart = easeInQuart;
var easeOutQuart = function (t) { return 1 - (--t) * t * t * t; };
exports.easeOutQuart = easeOutQuart;
var easeInOutQuart = function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; };
exports.easeInOutQuart = easeInOutQuart;
var easeInQuint = function (t) { return t * t * t * t * t; };
exports.easeInQuint = easeInQuint;
var easeOutQuint = function (t) { return 1 + (--t) * t * t * t * t; };
exports.easeOutQuint = easeOutQuint;
var easeInOutQuint = function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; };
exports.easeInOutQuint = easeInOutQuint;
//# sourceMappingURL=easings.js.map
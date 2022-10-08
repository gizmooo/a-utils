"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomInteger = exports.randomSort = exports.even = void 0;
var even = function (n) { return !(n % 2); };
exports.even = even;
var randomSort = function () {
    return 0.5 - Math.random();
};
exports.randomSort = randomSort;
var randomInteger = function (min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
};
exports.randomInteger = randomInteger;
//# sourceMappingURL=sort.js.map
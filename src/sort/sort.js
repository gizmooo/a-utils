"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomInteger = exports.randomSort = exports.even = void 0;
// Четное / нечетное
const even = (n) => !(n % 2);
exports.even = even;
const randomSort = () => {
    return 0.5 - Math.random();
};
exports.randomSort = randomSort;
const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
};
exports.randomInteger = randomInteger;

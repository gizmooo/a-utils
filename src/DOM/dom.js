"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveElements = exports.clearElements = void 0;
const clearElements = (elem) => {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
};
exports.clearElements = clearElements;
const moveElements = (from, to) => {
    Array.from(from.childNodes).forEach(node => to.appendChild(node));
};
exports.moveElements = moveElements;

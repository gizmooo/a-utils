"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
function debounce(func, wait = 20) {
    let h;
    let callable = (...args) => {
        clearTimeout(h);
        h = setTimeout(() => func(...args), wait);
    };
    return callable;
}
exports.debounce = debounce;

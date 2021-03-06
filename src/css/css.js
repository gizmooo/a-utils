"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prefixedCSSValue = exports.getCSS = void 0;
// Возвращает значение CSS элемента
function getCSS(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
}
exports.getCSS = getCSS;
// // Modernizr
const domPrefixes = ['moz', 'o', 'ms', 'webkit'];
function prefixedCSSValue(prop, value) {
    let result = false;
    const elem = document.createElement('div');
    const style = elem.style;
    if (prop in style) {
        let i = domPrefixes.length;
        style[prop] = value;
        result = style[prop];
        while (i-- && !result) {
            style[prop] = '-' + domPrefixes[i] + '-' + value;
            result = style[prop];
        }
    }
    if (result === '') {
        result = false;
    }
    return result;
}
exports.prefixedCSSValue = prefixedCSSValue;

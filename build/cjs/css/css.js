"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prefixedCSSValue = exports.getCSS = void 0;
function getCSS(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
}
exports.getCSS = getCSS;
var domPrefixes = ['moz', 'o', 'ms', 'webkit'];
function prefixedCSSValue(property, value) {
    var prop = property;
    var result = false;
    var elem = document.createElement('div');
    var style = elem.style;
    if (prop in style) {
        var i = domPrefixes.length;
        style[prop] = value;
        result = style[prop];
        while (i-- && !result) {
            style[prop] = "-".concat(domPrefixes[i], "-").concat(value);
            result = style[prop];
        }
    }
    return result === '' || typeof result === 'function' ? false : result;
}
exports.prefixedCSSValue = prefixedCSSValue;
//# sourceMappingURL=css.js.map
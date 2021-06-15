export function getCSS(element, property) {
    const prop = property;
    return window.getComputedStyle(element, null).getPropertyValue(prop);
}
const domPrefixes = ['moz', 'o', 'ms', 'webkit'];
export function prefixedCSSValue(property, value) {
    const prop = property;
    let result = false;
    const elem = document.createElement('div');
    const style = elem.style;
    if (prop in style) {
        let i = domPrefixes.length;
        style[prop] = value;
        result = style[prop];
        while (i-- && !result) {
            style[prop] = `-${domPrefixes[i]}-${value}`;
            result = style[prop];
        }
    }
    return result === '' || typeof result === 'function' ? false : result;
}
//# sourceMappingURL=css.js.map
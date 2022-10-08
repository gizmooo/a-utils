export const addHint = (type, url) => {
    let el = document.createElement('link');
    el.setAttribute('rel', type);
    el.setAttribute('href', url);
    document.getElementsByTagName('head')[0].appendChild(el);
};
//# sourceMappingURL=addHint.js.map
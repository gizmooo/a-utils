"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHint = void 0;
const addHint = (type, url) => {
    let el = document.createElement('link');
    el.setAttribute('rel', type);
    el.setAttribute('href', url);
    document.getElementsByTagName('head')[0].appendChild(el);
};
exports.addHint = addHint;

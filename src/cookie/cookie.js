"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCookie = exports.setCookie = exports.getCookie = void 0;
const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};
exports.getCookie = getCookie;
const setCookie = (name, value, options) => {
    options = Object.assign({ path: '/' }, options);
    let expires = options.expires;
    if (typeof expires === 'number') {
        let d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (typeof expires === 'object' && 'toUTCString' in expires) {
        options.expires = expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    let propName;
    for (propName in options) {
        if (options.hasOwnProperty(propName)) {
            updatedCookie += '; ' + propName;
            let propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += '=' + propValue;
            }
        }
    }
    document.cookie = updatedCookie;
};
exports.setCookie = setCookie;
const deleteCookie = (name) => {
    exports.setCookie(name, '', {
        expires: -1
    });
};
exports.deleteCookie = deleteCookie;

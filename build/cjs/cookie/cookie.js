"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCookie = exports.setCookie = exports.getCookie = void 0;
var getCookie = function (name) {
    var matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};
exports.getCookie = getCookie;
var setCookie = function (name, value, options) {
    options = __assign({ path: '/' }, options);
    var expires = options.expires;
    if (typeof expires === 'number') {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (typeof expires === 'object' && 'toUTCString' in expires) {
        options.expires = expires.toUTCString();
    }
    var updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    var propName;
    for (propName in options) {
        if (options.hasOwnProperty(propName)) {
            updatedCookie += '; ' + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += '=' + propValue;
            }
        }
    }
    document.cookie = updatedCookie;
};
exports.setCookie = setCookie;
var deleteCookie = function (name) {
    (0, exports.setCookie)(name, '', {
        expires: -1
    });
};
exports.deleteCookie = deleteCookie;
//# sourceMappingURL=cookie.js.map
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
exports.http = void 0;
var jsonFetch = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return fetch.apply(window || global, args);
};
function http(options) {
    var settings = {
        method: 'GET',
        body: null,
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers(__assign({ 'X-Requested-With': 'XMLHttpRequest' }, options.headers)),
        credentials: options.credentials
    };
    if (options.data) {
        settings.method = 'POST';
        if (typeof options.data === 'object' && !(options.data instanceof FormData)) {
            settings.body = JSON.stringify(options.data);
            settings.headers.append('Content-Type', 'application/json');
        }
        else {
            settings.body = options.data;
        }
    }
    if (options.method)
        settings.method = options.method;
    if (options.type === 'blob') {
        return fetch(options.action, settings)
            .then(function (response) {
            if (!response.ok)
                throw response;
            return response.blob();
        });
    }
    else if (options.type === 'text') {
        return fetch(options.action, settings)
            .then(function (response) {
            if (!response.ok)
                throw response;
            return response.text();
        });
    }
    else {
        settings.headers.append('Accept', 'application/json');
        return jsonFetch(options.action, settings)
            .then(function (response) {
            if (!response.ok)
                throw response;
            return response.json();
        });
    }
}
exports.http = http;
//# sourceMappingURL=http.js.map
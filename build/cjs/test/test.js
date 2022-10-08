"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWebpSupport = exports.isSafari = exports.isFirefox = exports.isIE = exports.isWebGLAvailable = exports.isTouch = void 0;
var isTouch = function () {
    try {
        document.createEvent('TouchEvent');
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.isTouch = isTouch;
var isWebGLAvailable = function () {
    try {
        var canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    }
    catch (e) {
        return false;
    }
};
exports.isWebGLAvailable = isWebGLAvailable;
var isIE = function () {
    try {
        var match = navigator.userAgent.match(/(?:MSIE | Trident\/.*; rv:)(\d+)/);
        return match ? parseInt(match[1]) : false;
    }
    catch (e) {
        return false;
    }
};
exports.isIE = isIE;
var isFirefox = function () {
    try {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    }
    catch (e) {
        return false;
    }
};
exports.isFirefox = isFirefox;
var isSafari = function () {
    try {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }
    catch (e) {
        return false;
    }
};
exports.isSafari = isSafari;
var isWebpSupportCheck = false;
var isWebpSupports = false;
var isWebpSupport = function () {
    try {
        if (isWebpSupportCheck)
            return isWebpSupports;
        isWebpSupportCheck = true;
        var elem = document.createElement('canvas');
        if (!!(elem.getContext && elem.getContext('2d'))) {
            var isSupport = elem.toDataURL('image/webp').includes('data:image/webp');
            if (!isSupport)
                document.documentElement.classList.add('no-webp');
            isWebpSupports = isSupport;
            return isSupport;
        }
        else {
            isWebpSupports = false;
            document.documentElement.classList.add('no-webp');
            return false;
        }
    }
    catch (e) {
        return false;
    }
};
exports.isWebpSupport = isWebpSupport;
//# sourceMappingURL=test.js.map
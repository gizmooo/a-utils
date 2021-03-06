"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWebpSupport = exports.isIE = exports.isWebGLAvailable = exports.isTouch = void 0;
// Проверка на тач
const isTouch = () => {
    try {
        document.createEvent('TouchEvent');
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.isTouch = isTouch;
// Проверка поддержки WebGL
const isWebGLAvailable = () => {
    try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    }
    catch (e) {
        return false;
    }
};
exports.isWebGLAvailable = isWebGLAvailable;
const isIE = () => {
    const match = navigator.userAgent.match(/(?:MSIE | Trident\/.*; rv:)(\d+)/);
    return match ? parseInt(match[1]) : false;
};
exports.isIE = isIE;
// Проверка поддержки изображений WEBP
let isUsedWebp = false;
const isWebpSupport = () => {
    const elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
        const isSupport = elem.toDataURL('image/webp').includes('data:image/webp');
        if (!isUsedWebp && !isSupport)
            document.documentElement.classList.add('no-webp');
        return isSupport;
    }
    else {
        if (!isUsedWebp)
            document.documentElement.classList.add('no-webp');
        return false;
    }
};
exports.isWebpSupport = isWebpSupport;

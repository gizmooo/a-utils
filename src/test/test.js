export const isTouch = () => {
    try {
        document.createEvent('TouchEvent');
        return true;
    }
    catch (e) {
        return false;
    }
};
export const isWebGLAvailable = () => {
    try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    }
    catch (e) {
        return false;
    }
};
export const isIE = () => {
    const match = navigator.userAgent.match(/(?:MSIE | Trident\/.*; rv:)(\d+)/);
    return match ? parseInt(match[1]) : false;
};
let isUsedWebp = false;
export const isWebpSupport = () => {
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
//# sourceMappingURL=test.js.map
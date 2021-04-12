// Проверка на тач
export const isTouch = (): boolean => {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}
// Проверка поддержки WebGL
export const isWebGLAvailable = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
}

export const isIE = (): number | false => {
  const match = navigator.userAgent.match(/(?:MSIE | Trident\/.*; rv:)(\d+)/);
  return match ? parseInt(match[1]) : false;
}
export const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// Проверка поддержки изображений WEBP
let isWebpSupportCheck = false;
let isWebpSupports = false;
export const isWebpSupport = (): boolean => {
  if (isWebpSupportCheck) return isWebpSupports;
  isWebpSupportCheck = true;

  const elem = document.createElement('canvas');

  if (!!(elem.getContext && elem.getContext('2d'))) {
    const isSupport = elem.toDataURL('image/webp').includes('data:image/webp');

    if (!isSupport) document.documentElement.classList.add('no-webp');

    isWebpSupports = isSupport;
    return isSupport;
  } else {
    isWebpSupports = false;
    document.documentElement.classList.add('no-webp');
    return false;
  }
}
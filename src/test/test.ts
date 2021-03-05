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

// Проверка поддержки изображений WEBP
let isUsedWebp = false;
export const isWebpSupport = (): boolean => {
  const elem = document.createElement('canvas');

  if (!!(elem.getContext && elem.getContext('2d'))) {
    const isSupport = elem.toDataURL('image/webp').includes('data:image/webp');

    if (!isUsedWebp && !isSupport) document.documentElement.classList.add('no-webp');

    return isSupport;
  } else {
    if (!isUsedWebp) document.documentElement.classList.add('no-webp');
    return false;
  }
}
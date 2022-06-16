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
  try {
    const match = navigator.userAgent.match(/(?:MSIE | Trident\/.*; rv:)(\d+)/);
    return match ? parseInt(match[1]) : false;
  } catch (e) {
    return false;
  }
}
export const isFirefox = () => {
  try {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1
  } catch (e) {
    return false;
  }
};
export const isSafari = () => {
  try {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
};

// Проверка поддержки изображений WEBP
let isWebpSupportCheck = false;
let isWebpSupports = false;
export const isWebpSupport = (): boolean => {
  try {
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
  } catch (e) {
    return false;
  }
}
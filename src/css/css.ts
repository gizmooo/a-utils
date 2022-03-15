// Возвращает значение CSS элемента
export function getCSS(element: HTMLElement, property: string) {
  return window.getComputedStyle(element, null).getPropertyValue(property);
}


// // Modernizr
const domPrefixes = ['moz', 'o', 'ms', 'webkit'];



export function prefixedCSSValue(property: string, value: string): boolean | string {
  const prop: any = property;
  let result: string | boolean = false;
  const elem = document.createElement('div');
  const style = elem.style;

  if (prop in style) {
    let i = domPrefixes.length;

    style[prop] = value;
    result = style[prop];

    while (i-- && !result) {
      style[prop] = `-${domPrefixes[i]}-${value}`;
      result = style[prop];
    }
  }

  return result === '' || typeof result === 'function' ? false : result;
}
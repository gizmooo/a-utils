// Возвращает значение CSS элемента
export function getCSS(element: HTMLElement, property: string) {
  return window.getComputedStyle(element, null).getPropertyValue(property);
}


// // Modernizr
const domPrefixes = ['moz', 'o', 'ms', 'webkit'];

type Prop = keyof Omit<CSSStyleDeclaration, 'length' | 'parentRule' | 'getPropertyPriority' | 'getPropertyValue' | 'item' | 'removeProperty' | 'setProperty'>;


export function prefixedCSSValue(prop: Prop, value: string) {
  let result: string | boolean = false;
  const elem = document.createElement('div');
  const style = elem.style;

  if (prop in style) {
    let i = domPrefixes.length;

    style[prop] = value;
    result = style[prop];

    while (i-- && !result) {
      style[prop] = '-' + domPrefixes[i] + '-' + value;
      result = style[prop];
    }
  }

  if (result === '') {
    result = false;
  }

  return result;
}
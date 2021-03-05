export const clearElements = (elem: HTMLElement) => {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
}
export const moveElements = (from: HTMLElement, to: HTMLElement) => {
  Array.from(from.childNodes).forEach(node => to.appendChild(node));
}

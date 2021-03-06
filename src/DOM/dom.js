export const clearElements = (elem) => {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
};
export const moveElements = (from, to) => {
    Array.from(from.childNodes).forEach(node => to.appendChild(node));
};

export function debounce(func, wait = 20) {
    let h;
    let callable = (...args) => {
        clearTimeout(h);
        h = setTimeout(() => func(...args), wait);
    };
    return callable;
}

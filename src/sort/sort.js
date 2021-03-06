// Четное / нечетное
export const even = (n) => !(n % 2);
export const randomSort = () => {
    return 0.5 - Math.random();
};
export const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
};

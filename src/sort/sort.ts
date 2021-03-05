// Четное / нечетное
export const even = (n: number): boolean => !(n % 2);

export const randomSort = (): number => {
  return 0.5 - Math.random();
}

export const randomInteger = (min: number, max: number): number => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}
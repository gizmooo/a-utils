export function debounce<T extends Function>(func: T, wait = 20) {
  let h: ReturnType<typeof setTimeout>;
  let callable = (...args: any) => {
    clearTimeout(h);
    h = setTimeout(() => func(...args), wait);
  };
  return <T>(<any>callable);
}
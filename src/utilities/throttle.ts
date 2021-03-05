export function throttle<T>(func: ((...args: T[]) => any), wait: number): ((...args: T[]) => any) {
  let isThrottled = false,
    savedArgs: T[] | null,
    savedThis: any;

  function wrapper(this: any, ...args: T[]) {

    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    func.apply(this, args);

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, wait);
  }

  return wrapper;
}
export const throttle = <T extends unknown[], R extends unknown>(callback: (...args: T) => R, waitTime: number) => {
  let isWaiting = false;

  return (...args: T) => {
    if (isWaiting) return;
    isWaiting = true;

    setTimeout(() => {
      isWaiting = false;
    }, waitTime);

    return callback(...args);
  }
}
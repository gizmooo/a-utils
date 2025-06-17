export const throttle = (callback, waitTime) => {
    let isWaiting = false;
    return (...args) => {
        if (isWaiting)
            return;
        isWaiting = true;
        setTimeout(() => {
            isWaiting = false;
        }, waitTime);
        return callback(...args);
    };
};
//# sourceMappingURL=throttle.js.map
export declare const throttle: <T extends unknown[], R extends unknown>(callback: (...args: T) => R, waitTime: number) => (...args: T) => R | undefined;

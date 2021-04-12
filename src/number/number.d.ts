export declare const lerp: (a: number, b: number, n: number) => number;
export declare const lerpLimit: (current: number, target: number, speed?: number, limit?: number) => number;
export declare const hexToRgb: (hex: string) => {
    r: number;
    g: number;
    b: number;
} | null;
export declare function base64ToArrayBuffer(base64: string): ArrayBufferLike;

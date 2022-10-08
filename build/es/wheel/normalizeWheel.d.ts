interface ExtendedWheelEvent extends WheelEvent {
    wheelDelta?: number;
    wheelDeltaX?: number;
    wheelDeltaY?: number;
    HORIZONTAL_AXIS?: 0x01;
    VERTICAL_AXIS?: 0x02;
    axis?: 0x01 | 0x02;
}
interface NormalizedEvent {
    spinX: number;
    spinY: number;
    pixelX: number;
    pixelY: number;
}
export declare const normalizeWheel: (event: ExtendedWheelEvent) => NormalizedEvent;
export {};

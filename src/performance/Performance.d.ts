import { EventEmitter } from '../EventEmitter';
export declare type PerformanceHandler = (shift: number) => void;
export declare class Performance extends EventEmitter<number, PerformanceHandler> {
    private _isDisabled;
    private readonly _defaultFPS;
    private _previousPerformanceTime;
    private _raf;
    private readonly onAnimate;
    constructor(fps?: number);
    removeListener(handler: PerformanceHandler): this;
    private _onAnimate;
    get isDisabled(): boolean;
    disable(): void;
    enable(): void;
}

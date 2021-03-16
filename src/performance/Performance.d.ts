import { EventEmitter } from '../EventEmitter';
export declare type PerformanceHandler = (shift: number) => void;
export declare class Performance extends EventEmitter<number, PerformanceHandler> {
    private readonly _defaultFPS;
    private _previousPerformanceTime;
    private _raf;
    private readonly onAnimate;
    constructor(fps?: number);
    _onAnimate(): void;
}

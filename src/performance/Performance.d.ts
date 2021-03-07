import { EventEmitter } from '../EventEmitter';
export declare type PerformanceHandler = (shift: number) => void;
export declare class Performance extends EventEmitter<number, PerformanceHandler> {
    private _previousPerformanceTime;
    private _raf;
    private readonly onAnimate;
    constructor();
    _onAnimate(): void;
}

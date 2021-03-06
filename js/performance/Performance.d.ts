import { EventEmitter } from '../EventEmitter';
export declare type PerformanceHandler = (shift: number) => void;
declare class PerformanceClass extends EventEmitter<number, PerformanceHandler> {
    private _previousPerformanceTime;
    private _raf;
    private readonly onAnimate;
    constructor();
    _onAnimate(): void;
}
export declare const Performance: PerformanceClass;
export {};
//# sourceMappingURL=Performance.d.ts.map
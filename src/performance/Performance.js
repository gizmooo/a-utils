import { EventEmitter } from '../EventEmitter';
const FPS = 1 / 60 * 1000;
export class Performance extends EventEmitter {
    constructor() {
        super();
        this._previousPerformanceTime = 0;
        this.onAnimate = () => this._onAnimate();
        this._raf = requestAnimationFrame(this.onAnimate);
    }
    _onAnimate() {
        const now = performance.now();
        const performanceShift = (now - this._previousPerformanceTime) / FPS;
        this.dispatch(performanceShift);
        this._previousPerformanceTime = now;
        this._raf = requestAnimationFrame(this.onAnimate);
    }
}
//# sourceMappingURL=Performance.js.map
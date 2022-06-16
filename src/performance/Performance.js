import { EventEmitter } from '../EventEmitter';
export class Performance extends EventEmitter {
    constructor(fps = 60) {
        super();
        this._isDisabled = false;
        this._defaultFPS = 1 / fps * 1000;
        this._previousPerformanceTime = 0;
        this._raf = -1;
        this.onAnimate = () => this._onAnimate();
        this.enable();
    }
    _onAnimate() {
        const now = performance.now();
        const performanceShift = (now - this._previousPerformanceTime) / this._defaultFPS;
        this.dispatch(performanceShift);
        this._previousPerformanceTime = now;
        this._raf = requestAnimationFrame(this.onAnimate);
    }
    get isDisabled() {
        return this._isDisabled;
    }
    disable() {
        if (this._isDisabled)
            return;
        cancelAnimationFrame(this._raf);
        this._isDisabled = true;
    }
    enable() {
        if (!this._isDisabled)
            return;
        this._raf = requestAnimationFrame(this.onAnimate);
        this._isDisabled = false;
    }
}
//# sourceMappingURL=Performance.js.map
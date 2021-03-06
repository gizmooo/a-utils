"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Performance = void 0;
const EventEmitter_1 = require("../EventEmitter");
// for 60 fps
const FPS = 1 / 60 * 1000;
class PerformanceClass extends EventEmitter_1.EventEmitter {
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
exports.Performance = new PerformanceClass();

import {EventEmitter} from '../EventEmitter';

export type PerformanceHandler = (shift: number) => void;

export class Performance extends EventEmitter<number, PerformanceHandler>{
  private readonly _defaultFPS: number;
  private _previousPerformanceTime: number;
  private _raf: number;
  private readonly onAnimate: () => void;

// for 60 fps
  constructor(fps = 60) {
    super();

    this._defaultFPS = 1 / fps * 1000;
    this._previousPerformanceTime = 0;
    this.onAnimate = () => this._onAnimate();
    this._raf = requestAnimationFrame(this.onAnimate);
  }

  _onAnimate() {
    const now = performance.now();
    const performanceShift = (now - this._previousPerformanceTime) / this._defaultFPS;

    this.dispatch(performanceShift);

    this._previousPerformanceTime = now;
    this._raf = requestAnimationFrame(this.onAnimate);
  }
}
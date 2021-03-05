import {EventEmitter} from '../EventEmitter';

export type PerformanceHandler = (shift: number) => void;

// for 60 fps
const FPS = 1 / 60;

class PerformanceClass extends EventEmitter<number, PerformanceHandler>{
  private _previousPerformanceTime: number;
  private _raf: number;
  private readonly onAnimate: () => void;

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

export const Performance = new PerformanceClass();
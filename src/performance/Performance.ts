import {EventEmitter} from '../EventEmitter';

export type PerformanceHandler = (shift: number) => void;

export class Performance extends EventEmitter<number, PerformanceHandler>{
  private _isDisabled: boolean;
  private readonly _defaultFPS: number;
  private _previousPerformanceTime: number;
  private _raf: number;
  private readonly onAnimate: () => void;

// for 60 fps
  constructor(fps = 60) {
    super();

    this._isDisabled = true;
    this._defaultFPS = 1 / fps * 1000;
    this._previousPerformanceTime = 0;
    this._raf = -1;
    this.onAnimate = () => this._onAnimate();

    if (window) this.enable();
  }
  public removeListener(handler: PerformanceHandler) {
    const emitter = super.removeListener(handler);

    if (!this._handlers.length) this.disable();
    return emitter;
  }

  private _onAnimate() {
    const now = performance.now();
    const performanceShift = (now - this._previousPerformanceTime) / this._defaultFPS;

    this.dispatch(performanceShift);

    this._previousPerformanceTime = now;
    this._raf = requestAnimationFrame(this.onAnimate);
  }

  public get isDisabled() {
    return this._isDisabled;
  }

  public disable() {
    if (!window) throw 'Используй только в браузере или в useEffect.';

    if (this._isDisabled) return;
    cancelAnimationFrame(this._raf);
    this._isDisabled = true;
  }
  public enable() {
    if (!window) throw 'Используй только в браузере или в useEffect.';

    if (!this._isDisabled) return;
    this._raf = requestAnimationFrame(this.onAnimate);
    this._isDisabled = false;
  }
}
import {isTouch} from '../test/test';
import {EventEmitter} from '../EventEmitter';
import {Performance} from '../performance/Performance';

export type MoveHandler = (e: MoveEvent) => void;

const RESISTANCE = 0.05;


export class MoveEvent {
  private readonly _x: number;
  private readonly _y: number;
  private readonly _vw: number;
  private readonly _vh: number;

  constructor(x = 0, y = 0, vw = 1, vh = 1) {
    this._x = x;
    this._y = y;
    this._vw = vw;
    this._vh = vh;
  }
  public get x() {
    return this._x;
  }
  public get y() {
    return this._y;
  }
  public get winX() {
    return (this._x + 0.5) * this._vw;
  }
  public get winY() {
    return (this._y + 0.5) * this._vh;
  }
  public get winCenterX() {
    return this._x * this._vw;
  }
  public get winCenterY() {
    return this._y * this._vh;
  }
}

const maximize = (num: number): number => Math.max(-0.5, Math.min(0.5, num));


export class MoveClass extends EventEmitter<MoveEvent, MoveHandler>{
  private _vw: number;
  private _vh: number;

  private _newX: number;
  private _newY: number;
  private _aniX: number;
  private _aniY: number;

  private readonly _performance: Performance;

  private readonly onMove: (e: MouseEvent) => void;
  private readonly onResize: () => void;
  private readonly onUpdate: (shift: number) => void;

  constructor(performance = new Performance()) {
    super();

    this._vw = 0;
    this._vh = 0;

    this._newX = 0;
    this._newY = 0;
    this._aniX = 0;
    this._aniY = 0;

    this._performance = performance;

    this.onMove = (e) => this._onMove(e);
    this.onResize = () => this._onResize();
    this.onUpdate = (shift) => this._onUpdate(shift);


    if (!isTouch()) this.enable();
  }

  private _onMove(e: MouseEvent) {
    this._newX = (e.clientX - this._vw / 2) / this._vw;
    this._newY = (e.clientY - this._vh / 2) / this._vh;
  }

  private _onResize() {
    this._vw = window.innerWidth;
    this._vh = window.innerHeight;
  }

  private _onUpdate(shift: number) {
    const nx = (this._newX - this._aniX) * RESISTANCE * shift;
    const ny = (this._newY - this._aniY) * RESISTANCE * shift;

    this._aniX += nx;
    this._aniY += ny;

    this._aniX = maximize(this._aniX);
    this._aniY = maximize(this._aniY);

    this.dispatch(new MoveEvent(this._aniX, this._aniY, this._vw, this._vh));
  }

  get x() {
    return this._aniX;
  }
  get y() {
    return this._aniY;
  }

  public enable() {
    this._onResize();
    document.documentElement.addEventListener('mousemove', this.onMove);

    window.addEventListener('resize', this.onResize);

    this._performance.addListener(this.onUpdate);
  }
  public disable() {
    document.documentElement.removeEventListener('mousemove', this.onMove);

    window.removeEventListener('resize', this.onResize);

    this._performance.removeListener(this.onUpdate);
  }
}
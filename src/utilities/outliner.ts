import {EventEmitter} from '../EventEmitter';

export class OutLiner extends EventEmitter<boolean> {
  private _isSetted: boolean;
  private _style?: HTMLStyleElement;

  constructor() {
    super();

    this._isSetted = false;

    if (window) this.init();
  }

  public init() {
    if (!window) throw 'Используй только в браузере или в useEffect.';

    this._style = document.createElement('style');
    document.head.appendChild(this._style);

    document.addEventListener('mousedown', () => this._set());
    document.addEventListener('touchstart', () => this._set());
    document.addEventListener('keydown', (e) => this._remove(e));
  }

  private _set() {
    if (this._isSetted) return;

    document.documentElement.classList.remove('keyboard');
    this._style!.innerHTML = '* {outline:none}';
    this._isSetted = true;

    this.dispatch(true);
  }
  private _remove(e: KeyboardEvent) {
    if (!this._isSetted) return;
    if (e && e.keyCode !== 9) return;

    document.documentElement.classList.add('keyboard');
    this._style!.innerHTML = '';
    this._isSetted = false;

    this.dispatch(false);
  }
}
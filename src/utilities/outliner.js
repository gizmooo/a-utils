import { EventEmitter } from '../EventEmitter';
const HTML = document.documentElement;
export class OutLiner extends EventEmitter {
    constructor() {
        super();
        this._isSetted = false;
        this._style = document.createElement('style');
        document.head.appendChild(this._style);
        document.addEventListener('mousedown', () => this._set());
        document.addEventListener('touchstart', () => this._set());
        document.addEventListener('keydown', (e) => this._remove(e));
    }
    _set() {
        if (this._isSetted)
            return;
        HTML.classList.remove('keyboard');
        this._style.innerHTML = '* {outline:none}';
        this._isSetted = true;
        this.dispatch(true);
    }
    _remove(e) {
        if (!this._isSetted)
            return;
        if (e && e.keyCode !== 9)
            return;
        HTML.classList.add('keyboard');
        this._style.innerHTML = '';
        this._isSetted = false;
        this.dispatch(false);
    }
}
//# sourceMappingURL=outliner.js.map
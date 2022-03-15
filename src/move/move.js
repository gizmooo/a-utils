import { isTouch } from '../test/test';
import { EventEmitter } from '../EventEmitter';
import { Performance } from '../performance/Performance';
export class MoveEvent {
    constructor(x = 0, y = 0, vw = 1, vh = 1) {
        this._x = x;
        this._y = y;
        this._vw = vw;
        this._vh = vh;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get winX() {
        return (this._x + 0.5) * this._vw;
    }
    get winY() {
        return (this._y + 0.5) * this._vh;
    }
    get winCenterX() {
        return this._x * this._vw;
    }
    get winCenterY() {
        return this._y * this._vh;
    }
}
const maximize = (num) => Math.max(-0.5, Math.min(0.5, num));
export class MoveClass extends EventEmitter {
    constructor(performance = new Performance(), resistance = 0.05) {
        super();
        this._vw = 0;
        this._vh = 0;
        this._newX = 0;
        this._newY = 0;
        this._aniX = 0;
        this._aniY = 0;
        this._performance = performance;
        this._resistance = resistance;
        this.onMove = (e) => this._onMove(e);
        this.onResize = () => this._onResize();
        this.onUpdate = (shift) => this._onUpdate(shift);
        if (!isTouch())
            this.enable();
    }
    _onMove(e) {
        this._newX = (e.clientX - this._vw / 2) / this._vw;
        this._newY = (e.clientY - this._vh / 2) / this._vh;
    }
    _onResize() {
        this._vw = window.innerWidth;
        this._vh = window.innerHeight;
    }
    _onUpdate(shift) {
        const nx = (this._newX - this._aniX) * this._resistance * shift;
        const ny = (this._newY - this._aniY) * this._resistance * shift;
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
    enable() {
        this._onResize();
        document.documentElement.addEventListener('mousemove', this.onMove);
        window.addEventListener('resize', this.onResize);
        this._performance.addListener(this.onUpdate);
    }
    disable() {
        document.documentElement.removeEventListener('mousemove', this.onMove);
        window.removeEventListener('resize', this.onResize);
        this._performance.removeListener(this.onUpdate);
    }
}
//# sourceMappingURL=move.js.map
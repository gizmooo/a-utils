"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasRenderer = void 0;
class CanvasRenderer {
    constructor() {
        this._width = 1;
        this._height = 1;
        this._canvas = document.createElement('canvas');
        this._canvas.style.cssText = `
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    `;
        this._context = this._canvas.getContext('2d');
    }
    // setters
    set size({ width, height }) {
        this._canvas.width = this._width = width;
        this._canvas.height = this._height = height;
    }
    // getters
    get context() {
        return this._context;
    }
    get canvas() {
        return this._canvas;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    // methods
    clear() {
        this.context.clearRect(0, 0, this._width, this._height);
    }
}
exports.CanvasRenderer = CanvasRenderer;

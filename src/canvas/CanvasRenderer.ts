type Rect = {
  width: number;
  height: number;
  x?: number;
  y?: number;
}

export class CanvasRenderer {
  private _width: number;
  private _height: number;

  private readonly _canvas: HTMLCanvasElement;
  private readonly _context: CanvasRenderingContext2D;

  constructor() {
    this._width = 1;
    this._height = 1;
    this._canvas = document.createElement('canvas')

    this._canvas.style.cssText = `
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    `;

    this._context = this._canvas.getContext('2d')!;
  }

  // setters
  public set size({width, height}: Rect) {
    this._canvas.width = this._width = width;
    this._canvas.height = this._height = height;
  }

  // getters
  public get context() {
    return this._context;
  }
  public get canvas() {
    return this._canvas;
  }
  public get width() {
    return this._width;
  }
  public get height() {
    return this._height;
  }

  // methods
  public clear() {
    this.context.clearRect(0, 0, this._width, this._height);
  }
}
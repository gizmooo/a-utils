"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasRenderer = void 0;
var CanvasRenderer = (function () {
    function CanvasRenderer(canvas) {
        if (canvas === void 0) { canvas = document.createElement('canvas'); }
        this._width = 1;
        this._height = 1;
        this._canvas = canvas;
        this._canvas.style.cssText = "\n      width: 100%;\n      height: 100%;\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n    ";
        this._context = this._canvas.getContext('2d');
    }
    Object.defineProperty(CanvasRenderer.prototype, "size", {
        set: function (_a) {
            var width = _a.width, height = _a.height;
            this._canvas.width = this._width = width;
            this._canvas.height = this._height = height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasRenderer.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasRenderer.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasRenderer.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasRenderer.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    CanvasRenderer.prototype.clear = function () {
        this.context.clearRect(0, 0, this._width, this._height);
    };
    return CanvasRenderer;
}());
exports.CanvasRenderer = CanvasRenderer;
//# sourceMappingURL=CanvasRenderer.js.map
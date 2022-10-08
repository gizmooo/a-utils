"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Performance = void 0;
var EventEmitter_1 = require("../EventEmitter");
var Performance = (function (_super) {
    __extends(Performance, _super);
    function Performance(fps) {
        if (fps === void 0) { fps = 60; }
        var _this = _super.call(this) || this;
        _this._isDisabled = true;
        _this._defaultFPS = 1 / fps * 1000;
        _this._previousPerformanceTime = 0;
        _this._raf = -1;
        _this.onAnimate = function () { return _this._onAnimate(); };
        if (window)
            _this.enable();
        return _this;
    }
    Performance.prototype.removeListener = function (handler) {
        var emitter = _super.prototype.removeListener.call(this, handler);
        if (!this._handlers.length)
            this.disable();
        return emitter;
    };
    Performance.prototype._onAnimate = function () {
        var now = performance.now();
        var performanceShift = (now - this._previousPerformanceTime) / this._defaultFPS;
        this.dispatch(performanceShift);
        this._previousPerformanceTime = now;
        this._raf = requestAnimationFrame(this.onAnimate);
    };
    Object.defineProperty(Performance.prototype, "isDisabled", {
        get: function () {
            return this._isDisabled;
        },
        enumerable: false,
        configurable: true
    });
    Performance.prototype.disable = function () {
        if (!window)
            throw 'Используй только в браузере или в useEffect.';
        if (this._isDisabled)
            return;
        cancelAnimationFrame(this._raf);
        this._isDisabled = true;
    };
    Performance.prototype.enable = function () {
        if (!window)
            throw 'Используй только в браузере или в useEffect.';
        if (!this._isDisabled)
            return;
        this._raf = requestAnimationFrame(this.onAnimate);
        this._isDisabled = false;
    };
    return Performance;
}(EventEmitter_1.EventEmitter));
exports.Performance = Performance;
//# sourceMappingURL=Performance.js.map
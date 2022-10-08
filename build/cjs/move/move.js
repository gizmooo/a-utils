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
exports.MoveClass = exports.MoveEvent = void 0;
var test_1 = require("../test/test");
var EventEmitter_1 = require("../EventEmitter");
var Performance_1 = require("../performance/Performance");
var MoveEvent = (function () {
    function MoveEvent(x, y, vw, vh) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (vw === void 0) { vw = 1; }
        if (vh === void 0) { vh = 1; }
        this._x = x;
        this._y = y;
        this._vw = vw;
        this._vh = vh;
    }
    Object.defineProperty(MoveEvent.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MoveEvent.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MoveEvent.prototype, "winX", {
        get: function () {
            return (this._x + 0.5) * this._vw;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MoveEvent.prototype, "winY", {
        get: function () {
            return (this._y + 0.5) * this._vh;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MoveEvent.prototype, "winCenterX", {
        get: function () {
            return this._x * this._vw;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MoveEvent.prototype, "winCenterY", {
        get: function () {
            return this._y * this._vh;
        },
        enumerable: false,
        configurable: true
    });
    return MoveEvent;
}());
exports.MoveEvent = MoveEvent;
var maximize = function (num) { return Math.max(-0.5, Math.min(0.5, num)); };
var MoveClass = (function (_super) {
    __extends(MoveClass, _super);
    function MoveClass(performance, resistance) {
        if (performance === void 0) { performance = new Performance_1.Performance(); }
        if (resistance === void 0) { resistance = 0.05; }
        var _this = _super.call(this) || this;
        _this._isDisabled = true;
        _this._vw = 0;
        _this._vh = 0;
        _this._newX = 0;
        _this._newY = 0;
        _this._aniX = 0;
        _this._aniY = 0;
        _this._performance = performance;
        _this._resistance = resistance;
        _this.onMove = function (e) { return _this._onMove(e); };
        _this.onResize = function () { return _this._onResize(); };
        _this.onUpdate = function (shift) { return _this._onUpdate(shift); };
        if (window && !(0, test_1.isTouch)())
            _this.enable();
        return _this;
    }
    MoveClass.prototype._onMove = function (e) {
        this._newX = (e.clientX - this._vw / 2) / this._vw;
        this._newY = (e.clientY - this._vh / 2) / this._vh;
    };
    MoveClass.prototype._onResize = function () {
        this._vw = window.innerWidth;
        this._vh = window.innerHeight;
    };
    MoveClass.prototype._onUpdate = function (shift) {
        var nx = (this._newX - this._aniX) * this._resistance * shift;
        var ny = (this._newY - this._aniY) * this._resistance * shift;
        this._aniX += nx;
        this._aniY += ny;
        this._aniX = maximize(this._aniX);
        this._aniY = maximize(this._aniY);
        this.dispatch(new MoveEvent(this._aniX, this._aniY, this._vw, this._vh));
    };
    Object.defineProperty(MoveClass.prototype, "x", {
        get: function () {
            return this._aniX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MoveClass.prototype, "y", {
        get: function () {
            return this._aniY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MoveClass.prototype, "performance", {
        get: function () {
            return this._performance;
        },
        enumerable: false,
        configurable: true
    });
    MoveClass.prototype.disable = function () {
        if (!window)
            throw 'Используй только в браузере или в useEffect.';
        if (this._isDisabled)
            return;
        document.documentElement.removeEventListener('mousemove', this.onMove);
        window.removeEventListener('resize', this.onResize);
        this._performance.removeListener(this.onUpdate);
        this._isDisabled = true;
    };
    MoveClass.prototype.enable = function () {
        if (!window)
            throw 'Используй только в браузере или в useEffect.';
        if (!this._isDisabled)
            return;
        this._onResize();
        document.documentElement.addEventListener('mousemove', this.onMove);
        window.addEventListener('resize', this.onResize);
        this._performance.addListener(this.onUpdate);
        this._isDisabled = false;
    };
    return MoveClass;
}(EventEmitter_1.EventEmitter));
exports.MoveClass = MoveClass;
//# sourceMappingURL=move.js.map
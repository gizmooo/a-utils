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
exports.OutLiner = void 0;
var EventEmitter_1 = require("../EventEmitter");
var OutLiner = (function (_super) {
    __extends(OutLiner, _super);
    function OutLiner() {
        var _this = _super.call(this) || this;
        _this._isSetted = false;
        if (window)
            _this.init();
        return _this;
    }
    OutLiner.prototype.init = function () {
        var _this = this;
        if (!window)
            throw 'Используй только в браузере или в useEffect.';
        this._style = document.createElement('style');
        document.head.appendChild(this._style);
        document.addEventListener('mousedown', function () { return _this._set(); });
        document.addEventListener('touchstart', function () { return _this._set(); });
        document.addEventListener('keydown', function (e) { return _this._remove(e); });
    };
    OutLiner.prototype._set = function () {
        if (this._isSetted)
            return;
        document.documentElement.classList.remove('keyboard');
        this._style.innerHTML = '* {outline:none}';
        this._isSetted = true;
        this.dispatch(true);
    };
    OutLiner.prototype._remove = function (e) {
        if (!this._isSetted)
            return;
        if (e && e.keyCode !== 9)
            return;
        document.documentElement.classList.add('keyboard');
        this._style.innerHTML = '';
        this._isSetted = false;
        this.dispatch(false);
    };
    return OutLiner;
}(EventEmitter_1.EventEmitter));
exports.OutLiner = OutLiner;
//# sourceMappingURL=outliner.js.map
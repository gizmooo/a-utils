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
exports.History = void 0;
var EventEmitter_1 = require("../EventEmitter");
var History = (function (_super) {
    __extends(History, _super);
    function History() {
        var _this = _super.call(this) || this;
        if ('scrollRestoration' in history)
            history.scrollRestoration = 'manual';
        _this._title = document.querySelector('title');
        window.addEventListener('popstate', function (event) {
            var state = event.state;
            _this.title = state.title;
            _this.dispatch(state);
        }, false);
        return _this;
    }
    History.prototype.push = function (options) {
        history.pushState(options.state, options.title, options.href);
        this.title = options.title;
    };
    History.prototype.replace = function (options) {
        history.replaceState(options.state, options.title, options.href);
        this.title = options.title;
    };
    Object.defineProperty(History.prototype, "title", {
        get: function () {
            return this._title.innerText;
        },
        set: function (title) {
            this._title.innerText = title;
        },
        enumerable: false,
        configurable: true
    });
    return History;
}(EventEmitter_1.EventEmitter));
exports.History = History;
//# sourceMappingURL=History.js.map
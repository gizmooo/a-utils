"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
var EventEmitter = (function () {
    function EventEmitter() {
        this._handlers = [];
    }
    EventEmitter.prototype.dispatch = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _loop_1 = function (argument) {
            this_1._handlers.forEach(function (handler) { return handler(argument); });
        };
        var this_1 = this;
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var argument = args_1[_a];
            _loop_1(argument);
        }
    };
    EventEmitter.prototype.addListener = function (handler) {
        if (!this._handlers.includes(handler))
            this._handlers.push(handler);
        return this;
    };
    EventEmitter.prototype.removeListener = function (handler) {
        var index = this._handlers.indexOf(handler);
        if (index >= 0)
            this._handlers.splice(index, 1);
        return this;
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map
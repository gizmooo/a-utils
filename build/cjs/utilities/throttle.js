"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
var throttle = function (callback, waitTime) {
    var isWaiting = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (isWaiting)
            return;
        isWaiting = true;
        setTimeout(function () {
            isWaiting = false;
        }, waitTime);
        return callback.apply(void 0, args);
    };
};
exports.throttle = throttle;
//# sourceMappingURL=throttle.js.map
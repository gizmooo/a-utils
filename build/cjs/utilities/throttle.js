"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
function throttle(func, wait) {
    var isThrottled = false, savedArgs, savedThis;
    function wrapper() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (isThrottled) {
            savedArgs = args;
            savedThis = this;
            return;
        }
        func.apply(this, args);
        isThrottled = true;
        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, wait);
    }
    return wrapper;
}
exports.throttle = throttle;
//# sourceMappingURL=throttle.js.map
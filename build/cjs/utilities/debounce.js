"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
function debounce(func, wait) {
    if (wait === void 0) { wait = 20; }
    var h;
    var callable = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(h);
        h = setTimeout(function () { return func.apply(void 0, args); }, wait);
    };
    return callable;
}
exports.debounce = debounce;
//# sourceMappingURL=debounce.js.map
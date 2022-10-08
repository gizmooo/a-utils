"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classNames = void 0;
var classNames = function () {
    var classNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
    }
    return classNames.filter(function (className) { return typeof className === 'string'; }).join(' ').trim() || undefined;
};
exports.classNames = classNames;
//# sourceMappingURL=index.js.map
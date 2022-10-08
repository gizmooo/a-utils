"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveElements = exports.clearElements = void 0;
var clearElements = function (elem) {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
};
exports.clearElements = clearElements;
var moveElements = function (from, to) {
    Array.from(from.childNodes).forEach(function (node) { return to.appendChild(node); });
};
exports.moveElements = moveElements;
//# sourceMappingURL=dom.js.map
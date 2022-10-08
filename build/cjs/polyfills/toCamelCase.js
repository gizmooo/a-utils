"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.toCamelCase = function () {
    return this
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) { return index === 0 ? word.toLowerCase() : word.toUpperCase(); })
        .replace(/(\s|-|_)+/g, '');
};
//# sourceMappingURL=toCamelCase.js.map
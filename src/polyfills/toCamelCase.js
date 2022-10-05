String.prototype.toCamelCase = function () {
    return this
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase())
        .replace(/(\s|-|_)+/g, '');
};
export {};
//# sourceMappingURL=toCamelCase.js.map
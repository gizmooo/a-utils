export const classNames = (...classNames) => {
    return classNames.filter(className => typeof className === 'string').join(' ').trim() || undefined;
};
//# sourceMappingURL=index.js.map
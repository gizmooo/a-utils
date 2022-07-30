export const className = (...classNames) => {
    return classNames.filter(className => typeof className === 'string').join(' ').trim() || undefined;
};
//# sourceMappingURL=index.js.map
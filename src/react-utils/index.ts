declare global {
  interface String {
    toCamelCase(): string;
  }
}
String.prototype.toCamelCase = function() {
  return this
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase())
    .replace(/(\s|-|_)+/g, '');
}

export const classNames = (...classNames: (string | boolean | undefined)[]): string | undefined => {
  return classNames.filter(className => typeof className === 'string').join(' ').trim() || undefined;
}
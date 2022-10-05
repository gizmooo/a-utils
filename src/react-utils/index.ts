export const classNames = (...classNames: (string | boolean | undefined)[]): string | undefined => {
  return classNames.filter(className => typeof className === 'string').join(' ').trim() || undefined;
}
export const mapObjectToParamsString = <T extends { [key: string]: any } & (keyof T extends string ? {} : 'T must only have string keys')>(params?: T): string => {
  if (!params) return '';

  let paramsString = '?';

  for (let key in params) {
    if (params.hasOwnProperty(key) && typeof params[key] !== 'undefined') paramsString += key + '=' + params[key].toString() + '&';
  }

  return paramsString.substring(0, paramsString.length - 1);
}
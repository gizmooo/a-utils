export const queryParse = (str: string) => {
  // if (typeof str !== 'string') {
  //   return {};
  // }
  //
  // str = str.trim().replace(/^(\?|#|&)/, '');
  //
  // if (!str) {
  //   return {};
  // }
  //
  // return str.split('&').reduce(function (ret, param) {
  //   let parts = param.replace(/\+/g, ' ').split('=');
  //   let key = parts[0];
  //   let val: string | null = parts[1];
  //
  //   key = decodeURIComponent(key);
  //
  //   // missing `=` should be `null`:
  //   // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
  //   val = val === undefined ? null : decodeURIComponent(val);
  //
  //   if (!ret.hasOwnProperty(key)) {
  //     ret[key] = val;
  //   } else if (Array.isArray(ret[key])) {
  //     ret[key].push(val);
  //   } else {
  //     ret[key] = [ret[key], val];
  //   }
  //
  //   return ret;
  // }, {});
}
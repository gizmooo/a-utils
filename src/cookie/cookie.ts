export const getCookie = (name: string): string | undefined => {
  let matches = document.cookie.match(new RegExp(
    '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};


export type CookieOptions = {
  'expires'?: string | number | Date
  'max-age'?: string | number
  'path'?: string
  'domain'?: string
  'secure'?: boolean
  'samesite'?: 'strict' | 'lax'
}
export const setCookie = (name: string, value: string, options?: CookieOptions): void => {
  options = {
    path: '/',
    ...options
  };

  let expires = options.expires;

  if (typeof expires === 'number') {
    let d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (typeof expires === 'object' && 'toUTCString' in expires) {
    options.expires = expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

  let propName: keyof typeof options;
  for (propName in options) {
    if (options.hasOwnProperty(propName)) {
      updatedCookie += '; ' + propName;
      let propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += '=' + propValue;
      }
    }
  }

  document.cookie = updatedCookie;
};

export const deleteCookie = (name: string): void => {
  setCookie(name, '', {
    expires: -1
  });
};
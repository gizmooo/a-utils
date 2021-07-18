type Data = FormData | string | null;
type Method = 'POST' | 'GET' | 'PATCH' | 'DELETE';

interface Settings {
  method: Method;
  headers: Headers;
  body?: Data;
  mode?: 'cors' | 'no-cors';
  cache?: 'no-store' | 'no-cache';
  redirect?: 'follow';
  referrer?: 'no-referrer';
  credentials?: 'include' | 'same-origin' | 'omit';
  signal?: AbortSignal;
}

type Options<U extends 'blob' | 'text' | 'json' | undefined> = {
  type?: U;
  action: string;
  data?: Data | Object;
  method?: Method;
  headers?: {
    [key: string]: string
  };
  credentials?: 'include' | 'same-origin' | 'omit';
}


interface TypedResponseJson<T = any> extends Response {
  json<P = T>(): Promise<P>
}
const jsonFetch = <B>(...args: any): Promise<TypedResponseJson<B>> => {
  return fetch.apply(window, args);
};


export function http(options: Options<'blob'>): Promise<Blob>;
export function http(options: Options<'text'>): Promise<string>;
export function http<T, E = any>(options: Options<'json' | undefined>): Promise<T>;

export function http <T, E = any>(options: Options<'blob' | 'text' | 'json' | undefined>) {
  // const controller = new AbortController();
  // const signal = controller.signal;

  const settings: Settings = {
    method: 'GET',
    body: null,
    mode: 'cors',
    cache: 'no-cache',
    headers: new Headers({
      'X-Requested-With': 'XMLHttpRequest',
      ...options.headers
    }),
    credentials: options.credentials
    // redirect: 'follow',
    // referrer: 'no-referrer',
    // signal
  };

  if (options.data) {
    settings.method = 'POST';

    if (typeof options.data === 'object') {
      settings.body = JSON.stringify(options.data);
      settings.headers.append('Content-Type', 'application/json');
    } else {
      settings.body = options.data;
    }
  }

  if (options.method) settings.method = options.method;


  if (options.type === 'blob') {
    return fetch(options.action, settings)
      .then(response => {
        if (!response.ok) throw response;
        return response.blob();
      })
  } else if (options.type === 'text') {
    return fetch(options.action, settings)
      .then(response => {
        if (!response.ok) throw response;
        return response.text();
      })
  } else {
    settings.headers.append('Accept', 'application/json');
    return jsonFetch<T>(options.action, settings)
      .then(response => {
        if (!response.ok) throw response;
        return response.json<T>();
      })
  }

  // return controller;
}

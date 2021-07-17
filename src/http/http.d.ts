declare type Data = FormData | string | null;
declare type Method = 'POST' | 'GET' | 'PATCH' | 'DELETE';
declare type Options<U extends 'blob' | 'text' | 'json' | undefined> = {
    type?: U;
    action: string;
    data?: Data | Object;
    method?: Method;
    headers?: {
        [key: string]: string;
    };
    credentials?: 'include' | 'same-origin' | 'omit';
};
export declare function http(options: Options<'blob'>): Promise<Blob>;
export declare function http(options: Options<'text'>): Promise<string>;
export declare function http<T>(options: Options<'json' | undefined>): Promise<T>;
export {};

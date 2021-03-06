declare type Data = FormData | string | null;
declare type Method = 'POST' | 'GET' | 'PATCH' | 'DELETE';
declare type HeadersCustom = {
    [key: string]: string;
} | Headers;
declare type Options<U extends 'blob' | 'text' | 'json' | undefined> = {
    type?: U;
    action: string;
    data?: Data;
    method?: Method;
    headers?: HeadersCustom;
};
export declare function http(options: Options<'blob'>): Promise<Blob>;
export declare function http(options: Options<'text'>): Promise<string>;
export declare function http<T>(options: Options<'json' | undefined>): Promise<T>;
export {};

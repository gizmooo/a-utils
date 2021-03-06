export declare const getCookie: (name: string) => string | undefined;
export declare type CookieOptions = {
    'expires'?: string | number | Date;
    'max-age'?: string | number;
    'path'?: string;
    'domain'?: string;
    'secure'?: boolean;
    'samesite'?: 'strict' | 'lax';
};
export declare const setCookie: (name: string, value: string, options?: CookieOptions | undefined) => void;
export declare const deleteCookie: (name: string) => void;
//# sourceMappingURL=cookie.d.ts.map
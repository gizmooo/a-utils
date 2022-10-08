export declare const mapObjectToParamsString: <T extends {
    [key: string]: any;
} & (keyof T extends string ? {} : "T must only have string keys")>(params?: T | undefined) => string;

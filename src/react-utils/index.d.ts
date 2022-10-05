declare global {
    interface String {
        toCamelCase(): string;
    }
}
export declare const classNames: (...classNames: (string | boolean | undefined)[]) => string | undefined;

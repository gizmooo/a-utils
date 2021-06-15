declare type Prop = keyof Omit<CSSStyleDeclaration, 'length' | 'parentRule' | 'getPropertyPriority' | 'getPropertyValue' | 'item' | 'removeProperty' | 'setProperty' | '[Symbol.iterator]' | number>;
export declare function getCSS(element: HTMLElement, property: Prop): string;
export declare function prefixedCSSValue(property: Prop, value: string): boolean | string;
export {};

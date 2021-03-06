export declare function getCSS(element: HTMLElement, property: string): string;
declare type Prop = keyof Omit<CSSStyleDeclaration, 'length' | 'parentRule' | 'getPropertyPriority' | 'getPropertyValue' | 'item' | 'removeProperty' | 'setProperty'>;
export declare function prefixedCSSValue(prop: Prop, value: string): string | false;
export {};

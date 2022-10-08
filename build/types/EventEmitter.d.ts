export declare type EventEmitterHandler<D> = (data: D) => void;
export declare class EventEmitter<T, H extends EventEmitterHandler<T> = EventEmitterHandler<T>> {
    protected _handlers: H[];
    constructor();
    dispatch(...args: T[]): void;
    addListener(handler: H): this;
    removeListener(handler: H): this;
}

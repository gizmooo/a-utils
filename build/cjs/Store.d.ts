import { EventEmitter } from './EventEmitter';
export declare type StoreEvent<T, D> = {
    type: T;
    data: D;
};
export declare type StoreSubscribeHandler<E> = (data: E) => void;
export declare class Store<T, D extends {}> extends EventEmitter<StoreEvent<T, D>, StoreSubscribeHandler<StoreEvent<T, D>>> {
    constructor(subscribe: StoreSubscribeHandler<StoreEvent<T, D>>);
}

import {EventEmitter} from './EventEmitter';
// import dispatcher from '../dispatcher';

export type StoreEvent<T, D> = {
  type: T;
  data: D;
}
export type StoreSubscribeHandler<E> = (data: E) => void;



export class Store<T, D extends {}> extends EventEmitter<StoreEvent<T, D>, StoreSubscribeHandler<StoreEvent<T, D>>> {
  // private _data: D;

  constructor(subscribe: StoreSubscribeHandler<StoreEvent<T, D>>) {
    super();

    // this._data = {};
    // dispatcher.addListener((event) => this.data = subscribe(this._data, event));
  }
  // get data() {
  //   return this._data;
  // }
  // set data(data) {
  //   this._data = data;
  //   this.dispatch(this._data)
  // }
}
import { EventEmitter } from './EventEmitter';
export class Store extends EventEmitter {
    // private _data: D;
    constructor(subscribe) {
        super();
        // this._data = {};
        // dispatcher.addListener((event) => this.data = subscribe(this._data, event));
    }
}

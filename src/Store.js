"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const EventEmitter_1 = require("./EventEmitter");
class Store extends EventEmitter_1.EventEmitter {
    // private _data: D;
    constructor(subscribe) {
        super();
        // this._data = {};
        // dispatcher.addListener((event) => this.data = subscribe(this._data, event));
    }
}
exports.Store = Store;

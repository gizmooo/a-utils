import { EventEmitter } from '../EventEmitter';
declare class OutLinerClass extends EventEmitter<boolean> {
    private _isSetted;
    private readonly _style;
    constructor();
    private _set;
    private _remove;
}
export declare const OutLiner: OutLinerClass;
export {};

import { EventEmitter } from '../EventEmitter';
export declare class OutLiner extends EventEmitter<boolean> {
    private _isSetted;
    private _style?;
    constructor();
    init(): void;
    private _set;
    private _remove;
}

import { EventEmitter } from '../EventEmitter';
export declare type HistoryHandler = ([...args]: any) => any;
export declare type HistoryOptions = {
    state: any;
    title: string;
    href?: string | null;
};
export declare class History extends EventEmitter<HistoryOptions, HistoryHandler> {
    private _title;
    constructor();
    push(options: HistoryOptions): void;
    replace(options: HistoryOptions): void;
    set title(title: string);
    get title(): string;
}

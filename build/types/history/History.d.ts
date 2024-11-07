import { EventEmitter } from '../EventEmitter';
export type HistoryHandler = ([...args]: any) => any;
export type HistoryOptions = {
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

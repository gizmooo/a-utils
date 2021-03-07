import { EventEmitter } from '../EventEmitter';
export declare type HistoryHandler = ([...args]: any) => any;
export declare type HistoryOptions = {
    state: any;
    title: string;
    href?: string | null;
};
declare class HistoryClass extends EventEmitter<HistoryOptions, HistoryHandler> {
    private _title;
    constructor();
    push(options: HistoryOptions): void;
    replace(options: HistoryOptions): void;
    set title(title: string);
    get title(): string;
}
export declare const History: HistoryClass;
export default History;

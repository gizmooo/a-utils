export declare type HistoryHandler = ([...args]: any) => any;
export declare type HistoryOptions = {
    state: any;
    title: string;
    href?: string | null;
};
declare class HistoryClass {
    private _title;
    private handlers;
    constructor();
    push(options: HistoryOptions): void;
    replace(options: HistoryOptions): void;
    addListener(handler: HistoryHandler): this;
    removeListener(handler: HistoryHandler): this;
    set title(title: string);
    get title(): string;
}
export declare const History: HistoryClass;
export default History;
//# sourceMappingURL=History.d.ts.map
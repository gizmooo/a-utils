declare type Rect = {
    width: number;
    height: number;
    x?: number;
    y?: number;
};
export declare class CanvasRenderer {
    private _width;
    private _height;
    private readonly _canvas;
    private readonly _context;
    constructor();
    set size({ width, height }: Rect);
    get context(): CanvasRenderingContext2D;
    get canvas(): HTMLCanvasElement;
    get width(): number;
    get height(): number;
    clear(): void;
}
export {};
//# sourceMappingURL=CanvasRenderer.d.ts.map
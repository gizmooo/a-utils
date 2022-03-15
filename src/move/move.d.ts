import { EventEmitter } from '../EventEmitter';
import { Performance } from '../performance/Performance';
export declare type MoveHandler = (e: MoveEvent) => void;
export declare class MoveEvent {
    private readonly _x;
    private readonly _y;
    private readonly _vw;
    private readonly _vh;
    constructor(x?: number, y?: number, vw?: number, vh?: number);
    get x(): number;
    get y(): number;
    get winX(): number;
    get winY(): number;
    get winCenterX(): number;
    get winCenterY(): number;
}
export declare class MoveClass extends EventEmitter<MoveEvent, MoveHandler> {
    private _vw;
    private _vh;
    private _newX;
    private _newY;
    private _aniX;
    private _aniY;
    private readonly _performance;
    private readonly _resistance;
    private readonly onMove;
    private readonly onResize;
    private readonly onUpdate;
    constructor(performance?: Performance, resistance?: number);
    private _onMove;
    private _onResize;
    private _onUpdate;
    get x(): number;
    get y(): number;
    enable(): void;
    disable(): void;
}

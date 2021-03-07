export class EventEmitter {
    constructor() {
        this._handlers = [];
    }
    dispatch(...args) {
        for (const argument of args) {
            this._handlers.forEach((handler) => handler(argument));
        }
    }
    addListener(handler) {
        if (!this._handlers.includes(handler))
            this._handlers.push(handler);
        return this;
    }
    removeListener(handler) {
        const index = this._handlers.indexOf(handler);
        if (index >= 0)
            this._handlers.splice(index, 1);
        return this;
    }
}
//# sourceMappingURL=EventEmitter.js.map
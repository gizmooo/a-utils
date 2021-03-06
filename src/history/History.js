"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
class HistoryClass {
    constructor() {
        if ('scrollRestoration' in history)
            history.scrollRestoration = 'manual';
        this._title = document.querySelector('title');
        this.handlers = [];
        window.addEventListener('popstate', (event) => {
            const state = event.state;
            this.title = state.title;
            this.handlers.forEach(handler => handler(state));
        }, false);
    }
    push(options) {
        history.pushState(options.state, options.title, options.href);
        this.title = options.title;
    }
    replace(options) {
        history.replaceState(options.state, options.title, options.href);
        this.title = options.title;
    }
    addListener(handler) {
        if (!this.handlers.includes(handler))
            this.handlers.push(handler);
        return this;
    }
    removeListener(handler) {
        const index = this.handlers.indexOf(handler);
        if (index >= 0)
            this.handlers.splice(index, 1);
        return this;
    }
    set title(title) {
        this._title.innerText = title;
    }
    get title() {
        return this._title.innerText;
    }
}
exports.History = new HistoryClass();
exports.default = exports.History;

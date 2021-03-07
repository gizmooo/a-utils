import { EventEmitter } from '../EventEmitter';
export class History extends EventEmitter {
    constructor() {
        super();
        if ('scrollRestoration' in history)
            history.scrollRestoration = 'manual';
        this._title = document.querySelector('title');
        window.addEventListener('popstate', (event) => {
            const state = event.state;
            this.title = state.title;
            this.dispatch(state);
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
    set title(title) {
        this._title.innerText = title;
    }
    get title() {
        return this._title.innerText;
    }
}
//# sourceMappingURL=History.js.map
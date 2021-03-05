export type HistoryHandler = ([...args]: any) => any;
export type HistoryOptions = {
  state: any;
  title: string;
  href?: string | null;
}

class HistoryClass {
  private _title: HTMLTitleElement;
  private handlers: HistoryHandler[];

  constructor() {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    this._title = document.querySelector('title')!;

    this.handlers = [];

    window.addEventListener('popstate', (event) => {
      const state = event.state;

      this.title = state.title;

      this.handlers.forEach(handler => handler(state));
    }, false);
  }
  push(options: HistoryOptions) {
    history.pushState(options.state, options.title, options.href);
    this.title = options.title;
  }
  replace(options: HistoryOptions) {
    history.replaceState(options.state, options.title, options.href);
    this.title = options.title;
  }
  addListener(handler: HistoryHandler) {
    if (!this.handlers.includes(handler)) this.handlers.push(handler);

    return this;
  }
  removeListener(handler: HistoryHandler) {
    const index = this.handlers.indexOf(handler);

    if (index >= 0) this.handlers.splice(index, 1);

    return this;
  }
  set title(title: string) {
    this._title.innerText = title;
  }
  get title() {
    return this._title.innerText;
  }
}

export const History = new HistoryClass();
export default History;
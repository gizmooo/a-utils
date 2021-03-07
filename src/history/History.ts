import {EventEmitter} from '../EventEmitter';

export type HistoryHandler = ([...args]: any) => any;
export type HistoryOptions = {
  state: any;
  title: string;
  href?: string | null;
}

class HistoryClass extends EventEmitter<HistoryOptions, HistoryHandler>{
  private _title: HTMLTitleElement;

  constructor() {
    super();

    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    this._title = document.querySelector('title')!;

    window.addEventListener('popstate', (event) => {
      const state = event.state;

      this.title = state.title;

      this.dispatch(state);
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
  set title(title: string) {
    this._title.innerText = title;
  }
  get title() {
    return this._title.innerText;
  }
}

export const History = new HistoryClass();
export default History;
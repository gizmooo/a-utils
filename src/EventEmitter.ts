export type EventEmitterHandler<D> = (data: D) => void;

export class EventEmitter<T, H extends EventEmitterHandler<T> = EventEmitterHandler<T>> {
  protected _handlers: H[];
  constructor() {
    this._handlers = [];
  }

  public dispatch(...args: T[]) {
    for (const argument of args) {
      this._handlers.forEach((handler) => handler(argument));
    }
  }
  public addListener(handler: H) {
    if (!this._handlers.includes(handler)) this._handlers.push(handler);

    return this;
  }
  public removeListener(handler: H) {
    const index = this._handlers.indexOf(handler);

    if (index >= 0) this._handlers.splice(index, 1);

    return this;
  }
}

// export type EventEmitterHandler<D> = (data: D) => void;
//
// const DEFAULT_EVENT_TYPE = 'change';
//
// export class EventEmitter<T, H extends EventEmitterHandler<T> = EventEmitterHandler<T>> {
//   private readonly _handlers: {[key: string]: H[]};
//
//   constructor(eventTypes: string[] = ['change']) {
//     this._handlers = {};
//
//     eventTypes.forEach((key) => this._handlers[key] = [])
//   }
//
//   public dispatch(...args: T[]) {
//     for (const argument of args) {
//       this._handlers.forEach((handler) => handler(argument));
//     }
//   }
//   public addListener(handler: H) {
//     if (!this._handlers.includes(handler)) this._handlers.push(handler);
//
//     return this;
//   }
//   public removeListener(handler: H) {
//     const index = this._handlers.indexOf(handler);
//
//     if (index >= 0) this._handlers.splice(index, 1);
//
//     return this;
//   }
// }
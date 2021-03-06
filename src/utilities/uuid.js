"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUUID = void 0;
const getUUID = (firstChar = 'x') => {
    let dt = new Date().getTime();
    return `${firstChar}xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (c) => {
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
};
exports.getUUID = getUUID;

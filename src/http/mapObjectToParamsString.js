"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapObjectToParamsString = void 0;
const mapObjectToParamsString = (params) => {
    if (!params)
        return '';
    let paramsString = '?';
    for (let key in params) {
        if (params.hasOwnProperty(key) && typeof params[key] !== 'undefined')
            paramsString += key + '=' + params[key].toString() + '&';
    }
    return paramsString.substring(0, paramsString.length - 1);
};
exports.mapObjectToParamsString = mapObjectToParamsString;

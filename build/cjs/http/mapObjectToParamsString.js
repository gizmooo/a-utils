"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapObjectToParamsString = void 0;
var mapObjectToParamsString = function (params) {
    if (!params || !Object.entries(params).length)
        return '';
    var paramsString = '?';
    for (var key in params) {
        if (params.hasOwnProperty(key) && typeof params[key] !== 'undefined' && params[key] !== null)
            paramsString += key + '=' + params[key].toString() + '&';
    }
    return paramsString.substring(0, paramsString.length - 1);
};
exports.mapObjectToParamsString = mapObjectToParamsString;
//# sourceMappingURL=mapObjectToParamsString.js.map
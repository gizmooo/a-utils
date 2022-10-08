export const mapObjectToParamsString = (params) => {
    if (!params || !Object.entries(params).length)
        return '';
    let paramsString = '?';
    for (let key in params) {
        if (params.hasOwnProperty(key) && typeof params[key] !== 'undefined' && params[key] !== null)
            paramsString += key + '=' + params[key].toString() + '&';
    }
    return paramsString.substring(0, paramsString.length - 1);
};
//# sourceMappingURL=mapObjectToParamsString.js.map
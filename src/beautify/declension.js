"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.declension = void 0;
const declension = (digit, expr, onlyword = false) => {
    digit = digit + '';
    let res = '';
    let expr_list = expr.split(' ');
    let reg = /[^0-9]+/;
    let i = +digit.replace(reg, '');
    if (onlyword)
        digit = '';
    if (i >= 5 && i <= 20) {
        res = digit + ' ' + expr_list[2];
    }
    else {
        i %= 10;
        if (i === 1)
            res = digit + ' ' + expr_list[0];
        else if (i >= 2 && i <= 4)
            res = digit + ' ' + expr_list[1];
        else
            res = digit + ' ' + expr_list[2];
    }
    return res;
};
exports.declension = declension;

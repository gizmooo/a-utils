"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.declension = void 0;
var declension = function (digit, expr, onlyword) {
    if (onlyword === void 0) { onlyword = false; }
    digit = digit + '';
    var res = '';
    var expr_list = expr.split(' ');
    var reg = /[^0-9]+/;
    var i = +digit.replace(reg, '');
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
//# sourceMappingURL=declension.js.map
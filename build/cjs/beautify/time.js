"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fancyTime = void 0;
var fancyTime = function (duration, splitter) {
    if (splitter === void 0) { splitter = '.'; }
    var hours = ~~(duration / 3600);
    var minutes = ~~((duration % 3600) / 60);
    var seconds = ~~duration % 60;
    var ret = '';
    if (hours > 0) {
        ret += '' + (hours < 10 ? '0' : '') + hours + splitter;
    }
    ret += '' + (minutes < 10 ? '0' : '') + minutes + splitter;
    ret += '' + (seconds < 10 ? '0' : '') + seconds;
    return ret;
};
exports.fancyTime = fancyTime;
//# sourceMappingURL=time.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64ToArrayBuffer = exports.hexToRgb = exports.lerpLimit = exports.lerp = void 0;
var lerp = function (a, b, n) {
    return (b - a) * n + a;
};
exports.lerp = lerp;
var lerpLimit = function (current, target, speed, limit) {
    if (speed === void 0) { speed = 0.1; }
    if (limit === void 0) { limit = 0.001; }
    var change = (target - current) * speed;
    if (Math.abs(change) < limit) {
        change = target - current;
    }
    return change;
};
exports.lerpLimit = lerpLimit;
var hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};
exports.hexToRgb = hexToRgb;
function base64ToArrayBuffer(base64) {
    base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
    var binaryString = atob(base64);
    var len = binaryString.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}
exports.base64ToArrayBuffer = base64ToArrayBuffer;
//# sourceMappingURL=number.js.map
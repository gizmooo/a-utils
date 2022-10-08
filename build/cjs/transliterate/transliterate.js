"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transliterate = void 0;
var converter = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
    'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
    'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
    'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
    'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
    'э': 'e', 'ю': 'yu', 'я': 'ya',
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
    'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
    'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
    'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
    'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch',
    'Ш': 'Sh', 'Щ': 'Sch', 'Ь': '', 'Ы': 'Y', 'Ъ': '',
    'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
};
var transliterate = function (text) {
    var result = '';
    for (var i = 0; i < text.length; i++) {
        var liter = text[i];
        if (liter in converter) {
            result += converter[liter];
        }
        else {
            result += liter;
        }
    }
    return result;
};
exports.transliterate = transliterate;
//# sourceMappingURL=transliterate.js.map
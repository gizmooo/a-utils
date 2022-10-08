"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Share = void 0;
var setPopup = function (url) {
    window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
};
exports.Share = {
    vk: function (purl, pTitle, pImg, text) {
        var url = 'https://vkontakte.ru/share.php?';
        url += 'url=' + encodeURIComponent(purl);
        if (pTitle)
            url += '&title=' + encodeURIComponent(pTitle);
        if (text)
            url += '&description=' + encodeURIComponent(text);
        if (pImg)
            url += '&image=' + encodeURIComponent(pImg);
        url += '&noparse=true';
        setPopup(url);
    },
    ok: function (purl, pTitle, pImg, text) {
        var url = 'https://connect.ok.ru/offer?';
        url += 'url=' + encodeURIComponent(purl);
        if (pTitle)
            url += '&title=' + encodeURIComponent(pTitle);
        if (pImg)
            url += '&imageUrl=' + encodeURIComponent(pImg);
        setPopup(url);
    },
    fb: function (purl, pTitle, pImg, text) {
        var url = 'https://www.facebook.com/sharer.php?s=100';
        url += '&u=' + encodeURIComponent(purl);
        setPopup(url);
    },
    tw: function (purl, pTitle, pImg, text) {
        var url = 'https://twitter.com/share?';
        url += 'url=' + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        if (pTitle)
            url += '&text=' + encodeURIComponent(pTitle);
        setPopup(url);
    },
    mr: function (purl, pTitle, pImg, text) {
        var url = 'https://connect.mail.ru/share?';
        url += 'url=' + encodeURIComponent(purl);
        if (pTitle)
            url += '&title=' + encodeURIComponent(pTitle);
        if (text)
            url += '&description=' + encodeURIComponent(text);
        if (pImg)
            url += '&imageurl=' + encodeURIComponent(pImg);
        setPopup(url);
    },
    wa: function (purl, pTitle, pImg, text) {
        var url = "https://api.whatsapp.com/send?text=".concat(encodeURIComponent(purl));
        setPopup(url);
    },
    tg: function (purl, pTitle, pImg, text) {
        var url = "https://t.me/share/url?url=".concat(encodeURIComponent(purl));
        if (pImg)
            url += "&text=".concat(encodeURIComponent(pImg));
        setPopup(url);
    }
};
//# sourceMappingURL=share.js.map
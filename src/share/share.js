export const Share = {
    vk: (purl, pTitle, pImg, text) => {
        let url = 'https://vkontakte.ru/share.php?';
        url += 'url=' + encodeURIComponent(purl);
        if (pTitle)
            url += '&title=' + encodeURIComponent(pTitle);
        if (text)
            url += '&description=' + encodeURIComponent(text);
        if (pImg)
            url += '&image=' + encodeURIComponent(pImg);
        url += '&noparse=true';
        Share.popup(url);
    },
    ok: (purl, pTitle, pImg, text) => {
        let url = 'https://connect.ok.ru/offer?';
        url += 'url=' + encodeURIComponent(purl);
        if (pTitle)
            url += '&title=' + encodeURIComponent(pTitle);
        if (pImg)
            url += '&imageUrl=' + encodeURIComponent(pImg);
        Share.popup(url);
    },
    fb: (purl, pTitle, pImg, text) => {
        let url = 'https://www.facebook.com/sharer.php?s=100';
        url += '&u=' + encodeURIComponent(purl);
        Share.popup(url);
    },
    tw: (purl, pTitle, pImg, text) => {
        let url = 'https://twitter.com/share?';
        url += 'url=' + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        if (pTitle)
            url += '&text=' + encodeURIComponent(pTitle);
        Share.popup(url);
    },
    mr: (purl, pTitle, pImg, text) => {
        let url = 'https://connect.mail.ru/share?';
        url += 'url=' + encodeURIComponent(purl);
        if (pTitle)
            url += '&title=' + encodeURIComponent(pTitle);
        if (text)
            url += '&description=' + encodeURIComponent(text);
        if (pImg)
            url += '&imageurl=' + encodeURIComponent(pImg);
        Share.popup(url);
    },
    wa: (purl, pTitle, pImg, text) => {
        let url = `https://api.whatsapp.com/send?text=${encodeURIComponent(purl)}`;
        Share.popup(url);
    },
    tg: (purl, pTitle, pImg, text) => {
        let url = `https://t.me/share/url?url=${encodeURIComponent(purl)}`;
        if (pImg)
            url += `&text=${encodeURIComponent(pImg)}`;
        Share.popup(url);
    },
    popup: (url) => {
        window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
    }
};

const setPopup = (url: string) => {
  window.open(url,'','toolbar=0,status=0,width=626,height=436');
}

export const Share = {
  vk: (purl: string, pTitle?: string, pImg?: string, text?: string) => {
    let url  = 'https://vkontakte.ru/share.php?';
    url += 'url=' + encodeURIComponent(purl);
    if (pTitle) url += '&title=' + encodeURIComponent(pTitle);
    if (text) url += '&description=' + encodeURIComponent(text);
    if (pImg) url += '&image=' + encodeURIComponent(pImg);
    url += '&noparse=true';

    setPopup(url);
  },
  ok: (purl: string, pTitle?: string, pImg?: string, text?: string) => {
    let url  = 'https://connect.ok.ru/offer?';
    url += 'url=' + encodeURIComponent(purl);
    if (pTitle) url += '&title=' + encodeURIComponent(pTitle);
    if (pImg) url += '&imageUrl=' + encodeURIComponent(pImg);

    setPopup(url);
  },
  fb: (purl: string, pTitle?: string, pImg?: string, text?: string) => {
    let url  = 'https://www.facebook.com/sharer.php?s=100';
    url += '&u=' + encodeURIComponent(purl);

    setPopup(url);
  },
  tw: (purl: string, pTitle?: string, pImg?: string, text?: string) => {
    let url  = 'https://twitter.com/share?';
    url += 'url=' + encodeURIComponent(purl);
    url += '&counturl=' + encodeURIComponent(purl);
    if (pTitle) url += '&text=' + encodeURIComponent(pTitle);

    setPopup(url);
  },
  mr: (purl: string, pTitle?: string, pImg?: string, text?: string) => {
    let url  = 'https://connect.mail.ru/share?';
    url += 'url=' + encodeURIComponent(purl);
    if (pTitle) url += '&title=' + encodeURIComponent(pTitle);
    if (text) url += '&description=' + encodeURIComponent(text);
    if (pImg) url += '&imageurl=' + encodeURIComponent(pImg);

    setPopup(url);
  },
  wa: (purl: string, pTitle?: string, pImg?: string, text?: string) => {
    let url = `https://api.whatsapp.com/send?text=${encodeURIComponent(purl)}`;

    setPopup(url);
  },
  tg: (purl: string, pTitle?: string, pImg?: string, text?: string) => {
    let url = `https://t.me/share/url?url=${encodeURIComponent(purl)}`;
    if (pImg) url += `&text=${encodeURIComponent(pImg)}`

    setPopup(url);
  }
};
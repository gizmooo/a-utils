export const addHint = (type: string, url: string) => {
  let el = document.createElement('link');
  el.setAttribute('rel', type);
  el.setAttribute('href', url);
  document.getElementsByTagName('head')[0].appendChild(el);
}
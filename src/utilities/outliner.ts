const style: HTMLStyleElement = document.createElement('style');
document.head.appendChild(style);

let setted: boolean = false;


const _set = (): void => {
  if (setted) return;

  document.documentElement.classList.remove('keyboard');
  style.innerHTML = '* {outline:none}';
  setted = true;
}
const _remove = (e: KeyboardEvent): void => {
  if (!setted) return;
  if (e && e.keyCode !== 9) return;

  document.documentElement.classList.add('keyboard');
  style.innerHTML = '';
  setted = false;
}

document.addEventListener('mousedown', _set);
document.addEventListener('touchstart', _set);
document.addEventListener('keydown', _remove);
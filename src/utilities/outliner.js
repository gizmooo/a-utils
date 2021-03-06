"use strict";
const style = document.createElement('style');
document.head.appendChild(style);
let setted = false;
const _set = () => {
    if (setted)
        return;
    document.documentElement.classList.remove('keyboard');
    style.innerHTML = '* {outline:none}';
    setted = true;
};
const _remove = (e) => {
    if (!setted)
        return;
    if (e && e.keyCode !== 9)
        return;
    document.documentElement.classList.add('keyboard');
    style.innerHTML = '';
    setted = false;
};
document.addEventListener('mousedown', _set);
document.addEventListener('touchstart', _set);
document.addEventListener('keydown', _remove);

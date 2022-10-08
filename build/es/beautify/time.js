export const fancyTime = (duration, splitter = '.') => {
    const hours = ~~(duration / 3600);
    const minutes = ~~((duration % 3600) / 60);
    const seconds = ~~duration % 60;
    let ret = '';
    if (hours > 0) {
        ret += '' + (hours < 10 ? '0' : '') + hours + splitter;
    }
    ret += '' + (minutes < 10 ? '0' : '') + minutes + splitter;
    ret += '' + (seconds < 10 ? '0' : '') + seconds;
    return ret;
};
//# sourceMappingURL=time.js.map
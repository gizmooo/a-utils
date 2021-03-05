// Output like '01.01' or '04.03.59' or '123.03.59'

export const fancyTime = (duration: number, splitter = '.') => {
  const hours = ~~(duration / 3600);
  const minutes = ~~((duration % 3600) / 60);
  const seconds = ~~duration % 60;


  let ret = '';

  if (hours > 0) {
    ret += '' + (hours < 10 ? '0' : '') + hours + splitter;
  }

  ret += '' + (minutes < 10 ? '0' : '') + minutes + splitter;
  ret += '' +  (seconds < 10 ? '0' : '') + seconds;

  return ret;
}
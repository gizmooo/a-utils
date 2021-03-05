export const shortMonths = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
export const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентярь', 'Октябрь', 'Ноябрь', 'Декабрь'];
export const inclineMonths = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
export const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
export const fuckAmericanDay = [6, 0, 1, 2, 3, 4, 5];

//14 апр, 14:00export
export const formatDate = (date: Date | string) => {
  const dateObject = new Date(+date);
  const minutes = (dateObject.getMinutes() / 100).toFixed(2).split('.')[1];
  return dateObject.getDate() + ' ' + shortMonths[dateObject.getMonth()] + ', ' + dateObject.getHours() + ':' + minutes;
};
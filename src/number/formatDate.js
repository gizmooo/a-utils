"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.fuckAmericanDay = exports.days = exports.inclineMonths = exports.months = exports.shortMonths = void 0;
exports.shortMonths = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
exports.months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентярь', 'Октябрь', 'Ноябрь', 'Декабрь'];
exports.inclineMonths = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
exports.days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
exports.fuckAmericanDay = [6, 0, 1, 2, 3, 4, 5];
//14 апр, 14:00export
const formatDate = (date) => {
    const dateObject = new Date(+date);
    const minutes = (dateObject.getMinutes() / 100).toFixed(2).split('.')[1];
    return dateObject.getDate() + ' ' + exports.shortMonths[dateObject.getMonth()] + ', ' + dateObject.getHours() + ':' + minutes;
};
exports.formatDate = formatDate;

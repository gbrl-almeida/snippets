import formatISO from 'date-fns/formatISO';

const date = new Date();
const dateParsed = formatISO(date);
console.log(dateParsed);

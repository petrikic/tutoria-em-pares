/**
 * @param {Date} isoDate Data no formato ISODate
 * @summary https://www.maujor.com/w3c/datetime.html
 * @description Método trata datas no formato  YYYY-MM-DDThh:mm:ss.sTZD
 * @returns {String} Data no formato  dd/mm/yyyy
 * @example  parseISOToDefault('2019-12-02T15:35:28.164Z')//return 02/12/2019
 */
const parseISOToDefault = isoDate => {
  if (!isoDate) return "dd/mm/aaaa";
  const date_string = isoDate.toString();
  const date = date_string.substr(0, 10);
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};

/**
 * @param {Date} defaultDate Data no formato padrão gerada pelo new Date()
 * @summary https://www.w3schools.com/js/js_date_methods.asp
 * @description Método trata datas no formato padrão do new Date
 * @returns {String} Data no formato  dd/mm/yyyy
 * @example  parseDateToDefault('Fri Dec 06 2019 10:11:51 GMT-0400 (Horário Padrão do Amazonas)')//return 06/12/2019
 */
const parseDateToDefault = defaultDate => {
  const day = defaultDate.getDate();
  const month = defaultDate.getMonth();
  const year = defaultDate.getFullYear();
  return `${day}/${month}/${year}`;
};

/**
 * @param {String} date_string Data no formato dd/mm/yyyy
 * @summary https://www.w3schools.com/js/js_date_formats.asp
 * @description Método trata datas no formato padrão do new Date
 * @returns {String} Data no formato yyyy/mm/dd
 * @example  parseStringToDate('06/12/2019')//return 2019/12/06
 */
const parseStringToDate = date_string => {
  const [day, month, year] = date_string.split("/");
  return `${year}/${month}/${day}`;
};
module.exports = {
  parseDateToDefault,
  parseISOToDefault,
  parseStringToDate
};

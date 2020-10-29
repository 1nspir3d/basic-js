const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined ) {
    return 'Unable to determine the time of year!';
  } else if (arguments.lenght === 0) {
    return null;
  } else if ( date.getYear() < 1970) {
      date.setYear(1971);
  }
  let month = date.getMonth();

  if (month >= 11 || month < 2) {
      return 'winter';
    } else if (month >= 8) {
      return 'autumn';
    } else if (month >= 5) {
      return 'summer';
    } else if (month >= 2) {
      return 'spring';
    }
};

const convertToCelsius = function (tempF) {
  let result = Math.round((((tempF - 32) * 5) / 9) * 10) / 10;

  return result;
};
//Math.round(number * 10) / 10
const convertToFahrenheit = function (tempC) {
  let result = Math.round(((tempC * 9) / 5 + 32) * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

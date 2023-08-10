const convertToCelsius = function(fahrenheit) {
  let celcius = Math.round(fahrenheit - 273.5);
  return celcius;
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = Math.round(celcius + 273.5);
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

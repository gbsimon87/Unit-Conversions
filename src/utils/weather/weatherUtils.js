export const convertCelsiusToFahrenheit = celsiusValue =>
  (celsiusValue * 1.8 + 32).toFixed(2);

export const convertFahrenheitToCelsius = fahrenheitValue =>
  ((fahrenheitValue - 32) * (5 / 9)).toFixed(2);

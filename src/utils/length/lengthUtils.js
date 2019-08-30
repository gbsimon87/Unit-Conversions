import * as mathUtils from "../math/mathUtils";

/// MILLIMETERS
export const convertMillimeterToDecameter = value =>
  mathUtils.divideBy10000(value).toFixed(6);

export const convertMillimeterToCentimeter = value =>
  mathUtils.divideBy10(value).toFixed(6);

export const convertMillimeterToDecimeter = value =>
  mathUtils.divideBy100(value).toFixed(6);

export const convertMillimeterToMeter = value =>
  mathUtils.divideBy1000(value).toFixed(6);

export const convertMillimeterToHectameter = value =>
  mathUtils.divideBy100000(value).toFixed(6);

export const convertMillimeterToKilometer = value =>
  (value / 1000000).toFixed(6);

export const convertMillimeterToMicroMeter = value =>
  mathUtils.multiplyBy1000(value).toFixed(6);

/// DECIMETERS
export const convertDecimeterToMillimeter = value =>
  mathUtils.multiplyBy100(value).toFixed(6);

export const convertDecimeterToCentimeter = value =>
  mathUtils.multiplyBy10(value).toFixed(6);

export const convertDecimeterToMeter = value =>
  mathUtils.divideBy10(value).toFixed(6);

export const convertDecimeterToDecameter = value =>
  mathUtils.divideBy100(value).toFixed(6);

export const convertDecimeterToHectameter = value =>
  mathUtils.divideBy1000(value).toFixed(6);

export const convertDecimeterToKilometer = value =>
  mathUtils.divideBy10000(value).toFixed(6);

// CENTIMETERS
export const convertCentimeterToMillimeter = value =>
  mathUtils.multiplyBy10(value).toFixed(6);

export const convertCentimeterToDecimeter = value =>
  mathUtils.divideBy10(value).toFixed(6);

export const convertCentimeterToMeter = value =>
  mathUtils.divideBy100(value).toFixed(6);

export const convertCentimeterToDecameter = value =>
  mathUtils.divideBy1000(value).toFixed(6);

export const convertCentimeterToHectameter = value =>
  mathUtils.divideBy100000(value).toFixed(6);

export const convertCentimeterToKilometer = value =>
  mathUtils.divideBy1000000(value).toFixed(6);

// METERS
export const convertMeterToMillimeter = value =>
  mathUtils.multiplyBy1000(value).toFixed(6);

export const convertMeterToCentimeter = value =>
  mathUtils.multiplyBy100(value).toFixed(6);

export const convertMeterToDecimeter = value =>
  mathUtils.multiplyBy10(value).toFixed(6);

export const convertMeterToDecameter = value =>
  mathUtils.divideBy10(value).toFixed(6);

export const convertMeterToHectameter = value =>
  mathUtils.divideBy100(value).toFixed(6);

export const convertMeterToKilometer = value =>
  mathUtils.divideBy1000(value).toFixed(6);

// DECAMETER
export const convertDecameterToMillimeter = value =>
  mathUtils.multiplyBy10000(value).toFixed(6);

export const convertDecameterToCentimeter = value =>
  mathUtils.multiplyBy1000(value).toFixed(6);

export const convertDecameterToDecimeter = value =>
  mathUtils.multiplyBy100(value).toFixed(6);

export const convertDecameterToMeter = value =>
  mathUtils.multiplyBy10(value).toFixed(6);

export const convertDecameterToHectameter = value =>
  mathUtils.divideBy10(value).toFixed(6);

export const convertDecameterToKilometer = value =>
  mathUtils.divideBy100(value).toFixed(6);

// HECTAMETER
export const convertHectameterToMillimeter = value =>
  mathUtils.multiplyBy100000(value).toFixed(6);

export const convertHectameterToCentimeter = value =>
  mathUtils.multiplyBy10000(value).toFixed(6);

export const convertHectameterToDecimeter = value =>
  mathUtils.multiplyBy1000(value).toFixed(6);

export const convertHectameterToMeter = value =>
  mathUtils.multiplyBy100(value).toFixed(6);

export const convertHectameterToDecameter = value =>
  mathUtils.multiplyBy10(value).toFixed(6);

export const convertHectameterToKilometer = value =>
  mathUtils.divideBy10(value).toFixed(6);

// KILOMETER
export const convertKilometerToMillimeter = value =>
  mathUtils.multiplyBy1000000(value).toFixed(2);

export const convertKilometerToCentimeter = value =>
  mathUtils.multiplyBy100000(value).toFixed(2);

export const convertKilometerToDecimeter = value =>
  mathUtils.multiplyBy10000(value).toFixed(2);

export const convertKilometerToMeter = value =>
  mathUtils.multiplyBy1000(value).toFixed(2);

export const convertKilometerToDecameter = value =>
  mathUtils.multiplyBy100(value).toFixed(2);

export const convertKilometerToHectameter = value =>
  mathUtils.multiplyBy10(value).toFixed(2);

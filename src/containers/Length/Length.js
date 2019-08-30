import React, { Component } from "react";
import Input from "../../components/Input/Input";
import { capitalizeFirstLetter } from "../../utils/utils";
import * as lengthUtils from "../../utils/length/lengthUtils";
import "./Length.css";

class Length extends Component {
  state = {
    units: {
      millimeter: "",
      centimeter: "",
      decimeter: "",
      meter: "",
      decameter: "",
      hectameter: "",
      kilometer: ""
    }
  };

  handleIndividualCases = (value, name) => {
    const isMillimeter = name === "millimeter";
    const isDecimeter = name === "decimeter";
    const isCentimeter = name === "centimeter";
    const isMeter = name === "meter";
    const isDecameter = name === "decameter";
    const isHectameter = name === "hectameter";
    const isKilometer = name === "kilometer";

    if (isMillimeter) {
      this.handleMillimeterInputChange(value, name);
    }
    if (isDecimeter) {
      this.handleDecimeterInputChange(value, name);
    }
    if (isCentimeter) {
      this.handleCentimeterInputChange(value, name);
    }
    if (isMeter) {
      this.handleMeterInputChange(value, name);
    }
    if (isDecameter) {
      this.handleDecameterInputChange(value, name);
    }
    if (isHectameter) {
      this.handleHectameterInputChange(value, name);
    }
    if (isKilometer) {
      this.handleKilometerInputChange(value, name);
    }
  };

  handleMillimeterInputChange = (value, name) => {
    const centimeter = lengthUtils.convertMillimeterToCentimeter(value);
    const decimeter = lengthUtils.convertMillimeterToDecimeter(value);
    const meter = lengthUtils.convertMillimeterToMeter(value);
    const decameter = lengthUtils.convertMillimeterToDecameter(value);
    const hectameter = lengthUtils.convertMillimeterToHectameter(value);
    const kilometer = lengthUtils.convertMillimeterToKilometer(value);

    this.setState({
      units: {
        ...this.state.units,
        [name]: value,
        centimeter,
        decimeter,
        meter,
        decameter,
        hectameter,
        kilometer
      }
    });
  };

  handleCentimeterInputChange = (value, name) => {
    const millimeter = lengthUtils.convertCentimeterToMillimeter(value);
    const decimeter = lengthUtils.convertCentimeterToDecimeter(value);
    const meter = lengthUtils.convertCentimeterToMeter(value);
    const decameter = lengthUtils.convertCentimeterToDecameter(value);
    const hectameter = lengthUtils.convertCentimeterToHectameter(value);
    const kilometer = lengthUtils.convertCentimeterToKilometer(value);

    this.setState({
      units: {
        ...this.state.units,
        [name]: value,
        millimeter,
        decimeter,
        meter,
        decameter,
        hectameter,
        kilometer
      }
    });
  };

  handleDecimeterInputChange = (value, name) => {
    const millimeter = lengthUtils.convertDecimeterToMillimeter(value);
    const centimeter = lengthUtils.convertDecimeterToCentimeter(value);
    const meter = lengthUtils.convertDecimeterToMeter(value);
    const decameter = lengthUtils.convertDecimeterToDecameter(value);
    const hectameter = lengthUtils.convertDecimeterToHectameter(value);
    const kilometer = lengthUtils.convertDecimeterToKilometer(value);

    this.setState({
      units: {
        ...this.state.units,
        [name]: value,
        millimeter,
        centimeter,
        meter,
        decameter,
        hectameter,
        kilometer
      }
    });
  };

  handleMeterInputChange = (value, name) => {
    const millimeter = lengthUtils.convertMeterToMillimeter(value);
    const centimeter = lengthUtils.convertMeterToCentimeter(value);
    const decimeter = lengthUtils.convertMeterToDecimeter(value);
    const decameter = lengthUtils.convertMeterToDecameter(value);
    const hectameter = lengthUtils.convertMeterToHectameter(value);
    const kilometer = lengthUtils.convertMeterToKilometer(value);

    this.setState({
      units: {
        ...this.state.units,
        [name]: value,
        millimeter,
        centimeter,
        decimeter,
        decameter,
        hectameter,
        kilometer
      }
    });
  };

  handleDecameterInputChange = (value, name) => {
    const millimeter = lengthUtils.convertDecameterToMillimeter(value);
    const centimeter = lengthUtils.convertDecameterToCentimeter(value);
    const decimeter = lengthUtils.convertDecameterToDecimeter(value);
    const meter = lengthUtils.convertDecameterToMeter(value);
    const hectameter = lengthUtils.convertDecameterToHectameter(value);
    const kilometer = lengthUtils.convertDecameterToKilometer(value);

    this.setState({
      units: {
        ...this.state.units,
        [name]: value,
        millimeter,
        centimeter,
        decimeter,
        meter,
        hectameter,
        kilometer
      }
    });
  };

  handleHectameterInputChange = (value, name) => {
    const millimeter = lengthUtils.convertHectameterToMillimeter(value);
    const centimeter = lengthUtils.convertHectameterToCentimeter(value);
    const decimeter = lengthUtils.convertHectameterToDecimeter(value);
    const meter = lengthUtils.convertHectameterToMeter(value);
    const decameter = lengthUtils.convertHectameterToDecameter(value);
    const kilometer = lengthUtils.convertHectameterToKilometer(value);

    this.setState({
      units: {
        ...this.state.units,
        [name]: value,
        millimeter,
        centimeter,
        decimeter,
        meter,
        decameter,
        kilometer
      }
    });
  };

  handleKilometerInputChange = (value, name) => {
    const millimeter = lengthUtils.convertKilometerToMillimeter(value);
    const centimeter = lengthUtils.convertKilometerToCentimeter(value);
    const decimeter = lengthUtils.convertKilometerToDecimeter(value);
    const meter = lengthUtils.convertKilometerToMeter(value);
    const decameter = lengthUtils.convertKilometerToDecameter(value);
    const hectameter = lengthUtils.convertKilometerToHectameter(value);

    this.setState({
      units: {
        ...this.state.units,
        [name]: value,
        millimeter,
        centimeter,
        decimeter,
        meter,
        decameter,
        hectameter
      }
    });
  };

  inputChangedHandler = event => {
    const {
      target: { value, name }
    } = event;

    this.setState({
      units: {
        ...this.state.units,
        [name]: value
      }
    });

    this.handleIndividualCases(value, name);
  };

  render() {
    const { units } = this.state;
    const inputsToDisplay = Object.keys(units).map(unit => {
      return (
        <Input
          key={unit}
          label={capitalizeFirstLetter(unit)}
          elementType="number"
          name={unit}
          changed={this.inputChangedHandler}
          value={units[unit]}
        />
      );
    });

    return <div className="inputs">{inputsToDisplay}</div>;
  }
}

export default Length;

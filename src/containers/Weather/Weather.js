import React, { Component } from "react";
import * as weatherUtils from "../../utils/weather/weatherUtils";
import Input from "../../components/Input/Input";
import { capitalizeFirstLetter } from "../../utils/utils";
import "./Weather.css";

class Weather extends Component {
  state = {
    units: {
      celsius: "",
      fahrenheit: ""
    }
  };

  handleIndividualCases = (value, name) => {
    const isCelsius = name === "celsius";
    const isFahrenheit = name === "fahrenheit";

    if (isCelsius) {
      this.handleCelsiusInputChange(value, name);
    }

    if (isFahrenheit) {
      this.handleFahrenheitInputChange(value, name);
    }
  };

  handleCelsiusInputChange = (value, name) => {
    const fahrenheit = weatherUtils.convertCelsiusToFahrenheit(value);
    this.setState({
      units: {
        ...this.state.units,
        [name]: value,
        fahrenheit
      }
    });
  };

  handleFahrenheitInputChange = (value, name) => {
    const celsius = weatherUtils.convertFahrenheitToCelsius(value);
    this.setState({
      units: {
        ...this.state.units,
        [name]: value,
        celsius
      }
    });
  };

  inputChangedHandler = event => {
    const {
      target: { value, name }
    } = event;

    console.log("name:", name);

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

    return <div className="weather">{inputsToDisplay}</div>;
  }
}

export default Weather;

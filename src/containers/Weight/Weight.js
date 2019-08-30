import React, { Component } from "react";
import Input from "../../components/Input/Input";
import "./Weight.css";

class Weight extends Component {
  state = {
    kilograms: "",
    pounds: ""
  };

  convertPoundToKilogram = pounds => (pounds / 2.205).toFixed(2);

  convertKilogramToPound = kilograms => (kilograms * 2.205).toFixed(2);

  inputChangedHandler = event => {
    const {
      target: { value, name }
    } = event;
    const isKilogram = name === "kilograms";
    const isPound = name === "pounds";

    if (isPound) {
      console.log('isPound', isPound);
      const kilograms = this.convertPoundToKilogram(value);
      this.setState({
        kilograms,
        pounds: value
      });
    }

    if (isKilogram) {
      console.log('isKilogram', isKilogram);
      const pounds = this.convertKilogramToPound(value);
      this.setState({
        pounds,
        kilograms: value
      });
    }
  };

  render() {
    const { kilograms, pounds } = this.state;

    return (
      <div className="weight">
        <Input
          label="Kilograms"
          elementType="number"
          name="kilograms"
          changed={this.inputChangedHandler}
          value={kilograms}
        />
        <Input
          label="Pounds"
          elementType="number"
          name="pounds"
          changed={this.inputChangedHandler}
          value={pounds}
        />
      </div>
    );
  }
}

export default Weight;

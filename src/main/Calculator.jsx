import React, { Component } from "react";
import "./Calculator.css";
import Button from "../components/Button.jsx";
import Display from "../components/Display.jsx";

// =============== INITIAL STATE OF CALCULATOR ===============
const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0, //Index of array
};

export default class Calculator extends Component {
  state = { ...initialState }; //Calling the variable initialState and their values using spread

  constructor(props) {
    super(props);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  // ================== CLEAR ALL ==================
  clearMemory() {
    this.setState({ ...initialState });
  }

  // ================== Typing a OPERATION in Calculator ==================
  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    }
    if (this.state.current === 1) {
      const equals = operation === "=";
      const currentOperation = this.state.operation;
      const values = [...this.state.values];

      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      } catch (e) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;
      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  }

  // ================== Typing a NUMBER in Calculator ==================
  addDigit(n) {
    // Filter | Only one dot for number
    if (
      (n === "." && this.state.displayValue.includes(".")) ||
      (n === "." && this.state.displayValue === "0")
    ) {
      return; //Nothing will be returned
    }
    if (n === "0" && this.state.displayValue === "0") {
      return; //Nothing will be returned
    }
    //Display need's to be clean if
    // - the value to be 0 and I wanna type a first number
    // - Press btn AC
    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;

    //Typed value
    const currentValue = clearDisplay ? " " : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false }); //Showing on display

    if (n !== ".") {
      const i = this.state.current; //Setting the index of array
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values });
      console.log(values);
    }
  }

  render() {
    // const addDigit = (n) => this.addDigit(n);
    // const setOperation = (op) => this.setOperation(op);
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" click={this.clearMemory} triple />
        <Button label="/" click={this.setOperation} operation />
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} operation />
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation />
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation />
        <Button label="0" click={this.addDigit} double />
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} operation />
      </div>
    );
  }
}

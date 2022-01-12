import React, { Component } from "react";
import "./Calculator.css";
import Button from "../components/Button.jsx";
import Display from "../components/Display.jsx";

export default class Calculator extends Component {

    constructor(props){
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

  clearMemory() {
    console.log("limpar");
  }

  setOperation(operation) {
    console.log(operation);
  }

  setDigit(n) {
    console.log(n);
  }

  render() {
    // const addDigit = (n) => this.addDigit(n);
    // const setOperation = (op) => this.setOperation(op);
    return (
      <div className="calculator">
        <Display value={100} />
        <Button label="AC" click={this.clearMemory} />
        <Button label="/" click={this.setOperation}/>
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" click={this.setOperation}/>
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" click={this.setOperation}/>
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" click={this.setOperation}/>
        <Button label="0" />
        <Button label="." />
        <Button label="=" click={this.setOperation}/>
      </div>
    );
  }
}

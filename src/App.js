import React from "react";
import "./App.scss";

const Formula = () => {
  return <p id="formula">0 + 0=</p>;
};

class Display extends React.Component {
  render() {
    return (
      <input
        value={this.props.value}
        type="text"
        name="display"
        id="display"
        maxLength="16"
        readOnly={true}
      />
    );
  }
}

const Special = () => {
  return (
    <div id="special" className="input-group">
      <input
        type="button"
        value="C"
        name="clear"
        id="clear"
        className="key"
      ></input>
      <input
        type="button"
        value="+/-"
        name="inverse"
        id="inverse"
        className="key"
      ></input>
      <input
        type="button"
        value="%"
        name="percent"
        id="percent"
        className="key"
      ></input>
    </div>
  );
};

class Numbers extends React.Component {
  render() {
    return (
      <div id="numbers" className="input-group">
        <input
          type="button"
          value="7"
          name="seven"
          id="seven"
          className="key"
          onClick={this.props.number}
        ></input>
        <input
          type="button"
          value="8"
          name="eight"
          id="eight"
          className="key"
          onClick={this.props.number}
        ></input>
        <input
          type="button"
          value="9"
          name="nine"
          id="nine"
          className="key"
          onClick={this.props.number}
        ></input>

        <input
          type="button"
          value="4"
          name="four"
          id="four"
          className="key"
          onClick={this.props.number}
        ></input>
        <input
          type="button"
          value="5"
          name="five"
          id="five"
          className="key"
          onClick={this.props.number}
        ></input>
        <input
          type="button"
          value="6"
          name="six"
          id="six"
          className="key"
          onClick={this.props.number}
        ></input>

        <input
          type="button"
          value="1"
          name="one"
          id="one"
          className="key"
          onClick={this.props.number}
        ></input>
        <input
          type="button"
          value="2"
          name="two"
          id="two"
          className="key"
          onClick={this.props.number}
        ></input>
        <input
          type="button"
          value="3"
          name="three"
          id="three"
          className="key"
          onClick={this.props.number}
        ></input>

        <input
          type="button"
          value="0"
          name="zero"
          id="zero"
          className="key"
          onClick={this.props.number}
        ></input>
        <input
          type="button"
          value="."
          name="decimal"
          id="decimal"
          className="key"
          onClick={this.props.decimal}
        ></input>
      </div>
    );
  }
}

const Operators = () => {
  return (
    <div id="operators" className="input-group">
      <input
        type="button"
        value="÷"
        name="divide"
        id="divide"
        className="key"
      ></input>
      <input
        type="button"
        value="×"
        name="multiply"
        id="multiply"
        className="key"
      ></input>
      <input
        type="button"
        value="-"
        name="substract"
        id="substract"
        className="key"
      ></input>
      <input
        type="button"
        value="+"
        name="add"
        id="add"
        className="key"
      ></input>
      <input type="submit" value="=" id="equals" className="key"></input>
    </div>
  );
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "0",
      formula: "",
      operatorWasPressed: false
    };
    this.handleNumber = this.handleNumber.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
  }

  handleNumber(e) {
    const currentValue = this.state.currentValue;
    const inputValue = e.target.value;
    let newValue = "";

    if (currentValue === "0") {
      if (inputValue === "0") {
        newValue = "0";
      } else {
        newValue = inputValue;
      }
    } else {
      newValue = currentValue + inputValue;
    }

    this.setState({
      currentValue: newValue
    });
  }

  handleDecimal(e) {
    const currentValue = this.state.currentValue;
    const inputValue = e.target.value;

    // only add period if there isn't one already
    if (!/\./.test(currentValue)) {
      this.setState({
        currentValue: currentValue + inputValue
      });
    }
  }

  render() {
    return (
      <form id="calculator">
        <Formula />
        <Display value={this.state.currentValue} />
        <div id="inputs">
          <Special />
          <Numbers number={this.handleNumber} decimal={this.handleDecimal} />
          <Operators />
        </div>
      </form>
    );
  }
}

const App = () => {
  return (
    <div id="page-wrapper">
      <Calculator />
      <footer id="author">
        <p>
          by <a href="https://edkerforne.github.io/">Edwin Kerforne</a>
        </p>
      </footer>
    </div>
  );
};

export default App;

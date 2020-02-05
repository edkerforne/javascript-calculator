import React from "react";
import "./App.scss";

const endsWithOperator = /[+\-×÷]$/;
const isAnOperator = /[+\-×÷]/;

class Formula extends React.Component {
  render() {
    return <p id="formula">{this.props.formula}</p>;
  }
}

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

class Special extends React.Component {
  render() {
    return (
      <div id="special" className="input-group">
        <input
          type="button"
          value="C"
          name="clear"
          id="clear"
          className="key"
          onClick={this.props.clear}
        ></input>
        <input
          type="button"
          value="+/-"
          name="inverse"
          id="inverse"
          className="key"
          onClick={this.props.inverse}
        ></input>
        <input
          type="button"
          value="%"
          name="percent"
          id="percent"
          className="key"
          onClick={this.props.percent}
        ></input>
      </div>
    );
  }
}

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
class Operators extends React.Component {
  render() {
    return (
      <div id="operators" className="input-group">
        <input
          type="button"
          value="÷"
          name="divide"
          id="divide"
          className="key"
          onClick={this.props.operator}
        ></input>
        <input
          type="button"
          value="×"
          name="multiply"
          id="multiply"
          className="key"
          onClick={this.props.operator}
        ></input>
        <input
          type="button"
          value="-"
          name="substract"
          id="substract"
          className="key"
          onClick={this.props.operator}
        ></input>
        <input
          type="button"
          value="+"
          name="add"
          id="add"
          className="key"
          onClick={this.props.operator}
        ></input>
        <input
          type="submit"
          value="="
          id="equals"
          className="key"
          onClick={this.props.operator}
        ></input>
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "0",
      formula: "",
      lastInput: "0"
    };
    this.handleNumber = this.handleNumber.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleEvaluation = this.handleEvaluation.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleInverse = this.handleInverse.bind(this);
    this.handlePercent = this.handlePercent.bind(this);
  }

  handleNumber(e) {
    const { currentValue, formula, lastInput } = this.state;
    const inputValue = e.target.value;
    let newValue = "";

    if (endsWithOperator.test(formula) && !/[0-9]|\./.test(lastInput)) {
      // after an operator was pressed, replace old (current) value
      // with new one
      newValue = inputValue;
    } else {
      if (currentValue === "0" || lastInput === "=") {
        if (inputValue === "0") {
          newValue = "0";
        } else {
          newValue = inputValue;
        }
      } else {
        newValue = currentValue + inputValue;
      }
    }

    newValue = newValue.substring(0, 16);

    this.setState({
      currentValue: newValue,
      lastInput: inputValue
    });
  }

  handleDecimal(e) {
    const currentValue = this.state.currentValue;
    const inputValue = e.target.value;

    // only add decimal if no period is found
    if (!/\./.test(currentValue)) {
      this.setState({
        currentValue: (currentValue + inputValue).substring(0, 16),
        lastInput: inputValue
      });
    }
  }

  handleOperator(e) {
    e.preventDefault();

    const { currentValue, formula, lastInput } = this.state;
    const inputValue = e.target.value;
    let newValue = currentValue.substring(0, 16);
    let newFormula = "";

    // if an operator is pressed and there is no value
    // after the period, remove that unnecessary period
    if (/\.$/.test(currentValue)) {
      newValue = currentValue.substring(0, currentValue.length - 1);
    }

    if (isAnOperator.test(lastInput)) {
      // if two operators were pressed in a row,
      // replace previous operator with the new
      newFormula = formula.substring(0, formula.length - 1) + inputValue;
    } else if (lastInput === "%") {
      newFormula = formula;
    } else {
      if (endsWithOperator.test(formula)) {
        newFormula = formula + newValue + inputValue;
      } else {
        newFormula = newValue + inputValue;
      }
    }

    this.setState({
      currentValue: this.handleEvaluation(newFormula).substring(0, 16),
      formula: newFormula,
      lastInput: inputValue
    });
  }

  handleEvaluation(string) {
    let formula = string;

    // remove last operator (you cannot eval otheriwse)
    // and replace multiply and divide signs
    formula = formula
      .substring(0, formula.length - 1)
      .replace("×", "*")
      .replace("÷", "/");

    return formula === "0" ? "0" : eval(formula).toString();
  }

  handleClear(e) {
    this.setState({
      currentValue: "0",
      formula: "",
      lastInput: "0"
    });
  }

  handleInverse() {
    const currentValue = this.state.currentValue;

    this.setState({ currentValue: eval(-currentValue).toString() });
  }

  handlePercent() {
    const { currentValue, formula } = this.state;

    // if formula is empty, percentage is 0
    let percentage =
      formula === "" || formula === "0"
        ? "0"
        : (this.handleEvaluation(formula) / 100) * currentValue;
    percentage = percentage;

    // currentValue and formula should be zero when trying
    // to calculate a percentage of zero
    this.setState({
      currentValue:
        currentValue === "0" ? "0" : percentage.toString().substring(0, 16),
      formula: currentValue === "0" ? formula : formula + percentage,
      lastInput: "%"
    });
  }

  render() {
    return (
      <form id="calculator">
        <Formula formula={this.state.formula} />
        <Display value={this.state.currentValue} />
        <div id="inputs">
          <Special
            clear={this.handleClear}
            inverse={this.handleInverse}
            percent={this.handlePercent}
          />
          <Numbers number={this.handleNumber} decimal={this.handleDecimal} />
          <Operators
            operator={this.handleOperator}
            equals={this.handleEvaluation}
          />
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

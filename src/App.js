import React from "react";
import "./App.scss";

const Formula = () => {
  return <p id="formula">0 + 0=</p>;
};

const Display = () => {
  return (
    <input
      value="0"
      type="text"
      name="display"
      id="display"
      maxlength="16"
    ></input>
  );
};

const Special = () => {
  return (
    <div id="special" class="input-group">
      <input
        type="button"
        value="C"
        name="clear"
        id="clear"
        class="key"
      ></input>
      <input
        type="button"
        value="+/-"
        name="inverse"
        id="inverse"
        class="key"
      ></input>
      <input
        type="button"
        value="%"
        name="percent"
        id="percent"
        class="key"
      ></input>
    </div>
  );
};

const Numbers = () => {
  return (
    <div id="numbers" class="input-group">
      <input
        type="button"
        value="7"
        name="seven"
        id="seven"
        class="key"
      ></input>
      <input
        type="button"
        value="8"
        name="eight"
        id="eight"
        class="key"
      ></input>
      <input type="button" value="9" name="nine" id="nine" class="key"></input>

      <input type="button" value="4" name="four" id="four" class="key"></input>
      <input type="button" value="5" name="five" id="five" class="key"></input>
      <input type="button" value="6" name="six" id="six" class="key"></input>

      <input type="button" value="1" name="one" id="one" class="key"></input>
      <input type="button" value="2" name="two" id="two" class="key"></input>
      <input
        type="button"
        value="3"
        name="three"
        id="three"
        class="key"
      ></input>

      <input type="button" value="0" name="zero" id="zero" class="key"></input>
      <input
        type="button"
        value="."
        name="decimal"
        id="decimal"
        class="key"
      ></input>
    </div>
  );
};

const Operators = () => {
  return (
    <div id="operators" class="input-group">
      <input
        type="button"
        value="÷"
        name="divide"
        id="divide"
        class="key"
      ></input>
      <input
        type="button"
        value="×"
        name="multiply"
        id="multiply"
        class="key"
      ></input>
      <input
        type="button"
        value="-"
        name="substract"
        id="substract"
        class="key"
      ></input>
      <input type="button" value="+" name="add" id="add" class="key"></input>
      <input type="submit" value="=" id="equals" class="key"></input>
    </div>
  );
};

const Calculator = () => {
  return (
    <form id="calculator">
      <Formula />
      <Display />
      <div id="inputs">
        <Special />
        <Numbers />
        <Operators />
      </div>
    </form>
  );
};

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

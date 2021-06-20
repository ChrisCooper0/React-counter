import "./App.css";
import React, { useState } from "react";

const INCREMENTS = [1, 2, 5, 10];
const DECREMENTS = [1, 2, 5, 10];

function App() {
  const [count, setCount] = useState(0);
  const span = document.getElementById("count");

  return (
    <div className="App">
      <div>
        <h1>
          Count:
          <span
            id="count"
            className={count > 0 ? "positive" : count < 0 ? "negative" : null}
          >
            {count}
          </span>
        </h1>
      </div>
      <div>
        <h4>Increment</h4>
        {INCREMENTS.map((value) => {
          return (
            <button onClick={() => setCount(count + value)}>+{value}</button>
          );
        })}
      </div>
      <div>
        <h4>Decrement</h4>
        {DECREMENTS.map((value) => {
          return (
            <button onClick={() => setCount(count - value)}>-{value}</button>
          );
        })}
      </div>
      <div>
        <button onClick={() => setCount(0)} className="reset">
          RESET
        </button>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import React, { useState } from "react";

const numbers = [1, 2, 5, 10];

function App() {
  const [count, setCount] = useState(0);

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
        {numbers.map((num) => (
          <button key={num} onClick={() => setCount((count) => count + num)}>
            +{num}
          </button>
        ))}
      </div>
      <div>
        <h4>Decrement</h4>
        {numbers.map((num) => (
          <button key={num} onClick={() => setCount((count) => count - num)}>
            -{num}
          </button>
        ))}
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

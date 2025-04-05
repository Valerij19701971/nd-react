import React, { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0); // state variable and setter

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
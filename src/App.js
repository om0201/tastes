import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [dish, setDish] = useState("");
  function dishes() {
    setDish("Recipie");
  }
  return (
    <div className="App">
      <h1>The tastes of INDIA</h1>
      <span>
        <button onClick={dishes}>East</button>
        <button onClick={dishes}>West</button>
        <button onClick={dishes}>North</button>
        <button onClick={dishes}>South</button>
      </span>

      <div>{dish}</div>
    </div>
  );
}

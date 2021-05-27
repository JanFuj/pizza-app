import React from "react";

export default function PizzaCounter({ counterValue, onPizzaCounterChange }) {
  const handleChange = (event) => {
    onPizzaCounterChange(event.target.value);
  };

  return (
    <div>
      <h3>Zadejte počet kusů:</h3>
      <input
        type="number"
        min="0"
        value={counterValue}
        onChange={handleChange}
      ></input>
    </div>
  );
}

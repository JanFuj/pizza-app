import React from "react";

export default function PizzaShoppingBasket({
  pizzasInBasket,
  onPizzaRemoved,
}) {
  let handleClick = (pizzaId) => {
    onPizzaRemoved(pizzaId);
  };

  return (
    <div>
      <h3>Shrnutí objednávky</h3>
      {pizzasInBasket.map((pizza) => (
        <fieldset key={pizza.id}>
          <div>{pizza.value}</div>
          {pizza.extras.length > 0 &&
            pizza.extras.map((extra) => (
              <div key={extra.id}>{extra.value}</div>
            ))}
          <div>Cena: {pizza.totalPrice},- kč</div>
          <button onClick={() => handleClick(pizza.id)}>Odebrat</button>
        </fieldset>
      ))}
    </div>
  );
}

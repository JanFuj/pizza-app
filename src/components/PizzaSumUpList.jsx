import React from "react";

export default function PizzaSumUpList({
  selectedPizza,
  extras,
  selectedPizzaCount,
  onAddToBasket,
}) {
  let calculatePrice = (count, price) => {
    return parseInt(count) * parseInt(price);
  };

  let createBasketObject = () => {
    let basketObject = {
      ...selectedPizza,
      id: 0,
      extras,
      totalPrice: calculatePrice(selectedPizzaCount, selectedPizza.price),
    };
    onAddToBasket(basketObject);
  };

  if (selectedPizza === null) {
    return <h3>Prosím vyberte pizzu...</h3>;
  }

  return (
    <div>
      <div>
        <h3>Vámi vybraná pizza:</h3>
        <p>{selectedPizza.value}</p>
        <h4>Extra suroviny: </h4>
        {extras.length > 0 ? (
          extras.map((item) => <div key={item.id}>{item.value}</div>)
        ) : (
          <div>Nevybrali jste žádné extra suroviny</div>
        )}
        {selectedPizzaCount > 0 ? (
          <div>
            <div>{selectedPizzaCount} ks</div>
            <div>
              {calculatePrice(selectedPizzaCount, selectedPizza.price)}
              ,- kč
            </div>
            <button onClick={createBasketObject}>Přidat do košíku</button>
          </div>
        ) : (
          <div>
            <strong>Zadejte počet kusů</strong>
          </div>
        )}
      </div>
    </div>
  );
}

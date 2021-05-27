import React from "react";

export default function PizzaTypePicker({
  avaiablePizzas,
  onPizzaSelectionChange,
}) {
  const handleChange = (event) => {
    onPizzaSelectionChange(event.target.value);
  };

  return (
    <div>
      <div>
        <h3>Vyberte pizu: </h3>
        {avaiablePizzas.map((pizza) => (
          <label key={pizza.id}>
            <input
              type="radio"
              value={pizza.id}
              name="pizza"
              checked={pizza.isChecked}
              onChange={handleChange}
            />
            {pizza.value}
            <br />
          </label>
        ))}
      </div>
    </div>
  );
}

// console.log(
//   event.target.value,
//   event.target.getAttribute("data-price"),
//   event.target.dataset.price,
//   event.target.text
// );

// return (
//   <div onChange={handleChange}>
//     <h3>Vyberte pizu: </h3>
//     <input type="radio" value="Herkulova - rajčata, oregano, eidam, herkules" name="pizza" data-price="150" />
//     Herkulova - rajčata, oregano, eidam, herkules
//     <br />
//     <input type="radio" value="syrova" name="pizza" data-price="150" />
//     Sýrová - rajčata, oregano, eidam, niva, uzený sýr, hermelín, mozzarella
//     <br />
//     <input type="radio" value="extra-paliva" name="pizza" data-price="150" />
//     Extra pálivá - rajčata, oregano, eidam, ang.slan., klobása, chilli,
//     feferony
//     <br />
//     <input type="radio" value="kureci" name="pizza" data-price="150" />
//     Kuřecí - rajčata, oregano, kuřecí maso, ang.slan., smetana, kukuřice,
//     pórek
//     <br />
//     <input type="radio" value="zahradnikova" name="pizza" data-price="150" />
//     Zahradníkova - rajčata, oregano, pórek, hrášek, kukuřice, eidam, uz.sýr,
//     olivy
//     <br />
//     <input type="radio" value="pekelna" name="pizza" data-price="150" />
//     Pekelná - rajčata, oregano, fazole, anglická, klobása, feferony, chilli,
//     česnek
//     <br />
//     <input type="radio" value="sladka" name="pizza" data-price="150" />
//     Sladká - džem, ananas, smetana, čokoláda, cukr
//     <br />
//   </div>
// );

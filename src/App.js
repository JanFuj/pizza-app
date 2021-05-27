import React, { Component } from "react";
import "./App.css";
import PizzaTypePicker from "./components/PizzaTypePicker";
import PizzaCounter from "./components/PizzaCounter";
import PizzaExtrasPicker from "./components/PizzaExtrasPicker";
import PizzaSumUpList from "./components/PizzaSumUpList";
import PizzaShoppingBasket from "./components/PizzaShoppingBasket";

//https://ccv-vsb.github.io/pizza/pizza.html

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avaiablePizzas: [
        {
          id: 1,
          value: "Herkulova - rajčata, oregano, eidam, herkules",
          price: 150,
          isChecked: false,
        },
        {
          id: 2,
          value:
            "Sýrová - rajčata, oregano, eidam, niva, uzený sýr, hermelín, mozzarella",
          price: 200,
          isChecked: false,
        },
        {
          id: 3,
          value:
            "Extra pálivá - rajčata, oregano, eidam, ang.slan., klobása, chilli, feferony",
          price: 130,
          isChecked: false,
        },
        {
          id: 4,
          value:
            "Kuřecí - rajčata, oregano, kuřecí maso, ang.slan., smetana, kukuřice, pórek",
          price: 170,
          isChecked: false,
        },
        {
          id: 5,
          value:
            "Zahradníkova - rajčata, oregano, pórek, hrášek, kukuřice, eidam, uz.sýr, olivy",
          price: 165,
          isChecked: false,
        },
        {
          id: 6,
          value:
            "Pekelná - rajčata, oregano, fazole, anglická, klobása, feferony, chilli, česnek",
          price: 122,
          isChecked: false,
        },
        {
          id: 7,
          value: "Sladká - džem, ananas, smetana, čokoláda, cukr",
          price: 190,
          isChecked: false,
        },
      ],
      extras: [
        { id: 1, value: "Kukuřice", isChecked: false },
        { id: 2, value: "Niva", isChecked: false },
        { id: 3, value: "Herkules", isChecked: false },
        { id: 4, value: "Hermelín", isChecked: false },
        { id: 5, value: "Kuřecí", isChecked: false },
        { id: 6, value: "Jalapeños", isChecked: false },
      ],
      selectedPizza: null,
      selectedPizzaCount: 0,
      pizzasInBasket: [],
    };

    // preserve the initial state in a new object
    this.baseState = this.state;
  }

  handlePizzaSelectionChange = (selectedPizzaId) => {
    let pizza = this.state.avaiablePizzas.find(
      (x) => x.id === parseInt(selectedPizzaId)
    );
    this.setState((state, props) => {
      return {
        selectedPizza: pizza,
        avaiablePizzas: state.avaiablePizzas.map((pizza) =>
          pizza.id === parseInt(selectedPizzaId)
            ? { ...pizza, isChecked: !pizza.isChecked }
            : { ...pizza, isChecked: false }
        ),
      };
    });
  };

  handleExtraSelectionChanged = (selectedExtrasId) => {
    this.setState((state, props) => {
      return {
        extras: state.extras.map((item) =>
          item.id === parseInt(selectedExtrasId)
            ? { ...item, isChecked: !item.isChecked }
            : item
        ),
      };
    });
  };

  handlePizzaCounterChanged = (pizzaCount) => {
    let countOfPizza = 0;
    if (pizzaCount) {
      countOfPizza = parseInt(pizzaCount);
    }

    this.setState({ selectedPizzaCount: countOfPizza });
  };

  handleAddToBasket = (basketObject) => {
    let newBasketObjectId = 0;
    this.state.pizzasInBasket.length === 0
      ? (newBasketObjectId = 1)
      : (newBasketObjectId =
          Math.max(...this.state.pizzasInBasket.map((item) => item.id)) + 1);

    basketObject.id = newBasketObjectId;
    this.setState((state, props) => {
      return {
        pizzasInBasket: [...state.pizzasInBasket, basketObject],
        selectedPizza: null,
        selectedPizzaCount: 0,
        extras: state.extras.map((item) => {
          return { ...item, isChecked: false };
        }),
        avaiablePizzas: state.avaiablePizzas.map((item) => {
          return { ...item, isChecked: false };
        }),
      };
    });
  };

  handlePizzaRemoved = (pizzaInBasketId) => {
    this.setState((state, props) => {
      return {
        pizzasInBasket: state.pizzasInBasket.filter(
          (item) => item.id !== parseInt(pizzaInBasketId)
        ),
      };
    });
  };

  handleOrderSubmit = () => {
    this.setState(this.baseState);
    alert(
      `Vaše objednávka za ${this.calculateTotalPrice()},- kč byla odeslána. `
    );
  };

  calculateTotalPrice = () => {
    return this.state.pizzasInBasket
      .map((pizza) => pizza.totalPrice)
      .reduce((a, b) => a + b, 0);
  };

  render() {
    return (
      <div>
        <fieldset>
          <legend>
            <h2>Vylaďte si svou pizzu:</h2>
          </legend>
          <PizzaTypePicker
            avaiablePizzas={this.state.avaiablePizzas}
            onPizzaSelectionChange={this.handlePizzaSelectionChange}
          />
          <PizzaCounter
            counterValue={this.state.selectedPizzaCount}
            onPizzaCounterChange={this.handlePizzaCounterChanged}
          />
          <PizzaExtrasPicker
            avaiableExtras={this.state.extras}
            onExtraSelected={this.handleExtraSelectionChanged}
          />
          <PizzaSumUpList
            selectedPizza={this.state.selectedPizza}
            extras={this.state.extras.filter((x) => x.isChecked)}
            selectedPizzaCount={this.state.selectedPizzaCount}
            onAddToBasket={this.handleAddToBasket}
          />
          {this.state.pizzasInBasket.length > 0 && (
            <div>
              <PizzaShoppingBasket
                pizzasInBasket={this.state.pizzasInBasket}
                onPizzaRemoved={this.handlePizzaRemoved}
              />
              <h3>
                Celková cena:
                {this.calculateTotalPrice()}
                ,- kč
              </h3>
              <button onClick={this.handleOrderSubmit}>
                Odeslat objednávku
              </button>
            </div>
          )}
        </fieldset>
      </div>
    );
  }
}

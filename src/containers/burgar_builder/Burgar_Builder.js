import React, { Component } from "react";

import Aux from "../../hoc/Aux";

import Burger from "../../component/burgar/Burgar";

import BuildControls from "../../component/burgar/build_controls/BuildControls";

const INGRIDIENTS_PRICES = {
  meat: 2,
  salad: 1,
  bacon: 1.2,
  cheese: 1
};
class BugarBuilder extends Component {
  state = {
    ingridients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  };

  updatePurchasableState = ingridients => {
    const sum = Object.keys(ingridients)
      .map(ingKeys => {
        return ingridients[ingKeys];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  };

  addIngridientsHandler = type => {
    const oldCount = this.state.ingridients[type];
    const updatedCount = oldCount + 1;
    const updatedIngridients = { ...this.state.ingridients };
    updatedIngridients[type] = updatedCount;
    const priceAdditon = INGRIDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdditon;
    this.setState({
      totalPrice: newPrice,
      ingridients: updatedIngridients
    });
    this.updatePurchasableState(updatedIngridients);
  };

  removeIngridentsHandler = type => {
    const oldCount = this.state.ingridients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngridients = { ...this.state.ingridients };
    updatedIngridients[type] = updatedCount;
    const priceDeduct = INGRIDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduct;
    this.setState({
      totalPrice: newPrice,
      ingridients: updatedIngridients
    });
    this.updatePurchasableState(updatedIngridients);
  };

  render() {
    const disabledInfo = { ...this.state.ingridients };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingridients={this.state.ingridients} />
        <BuildControls
          addIng={this.addIngridientsHandler}
          removeIng={this.removeIngridentsHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BugarBuilder;

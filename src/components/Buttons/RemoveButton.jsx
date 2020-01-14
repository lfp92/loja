import React from "react";
import { connect } from "react-redux";

class RemoveButton extends React.Component {
  removeItem = () => {
    let { cartItems } = this.props;
    cartItems = removeItemsFromCart(cartItems, this.props.product);
    this.props.dispatch({
      type: "REMOVE_ITEM",
      payload: [...cartItems]
    });
  };

  render() {
    return <button onClick={this.removeItem}>{this.props.children}</button>
  }
}

export default connect(store => ({ cartItems: store.cart.cartItems }))(RemoveButton);

function removeItemsFromCart(cartItems, product) {
  cartItems = cartItems.map(x => {
    if (x.id === product.id) {
      if (x.quantity === 1)
        return null;
      x.quantity = - 1;
    }
    return x;
  }).filter(x => x !== null);

  // let items = cartItems.filter(x => x.id === product.id);
  // if (items.length === 1) {
  //   cartItems.push({ ...product, quantity: 1 });
  // } else {
  //   cartItems.map(x => {
  //     if (x.id === product.id) {
  //       x.quantity += 1;
  //     }
  //     return x;
  //   })
  // }
  return cartItems;
}
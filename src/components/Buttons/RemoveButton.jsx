import React from "react";
import { connect } from "react-redux";

class RemoveButton extends React.Component {
  removeItem = () => {
    let { cartItems } = this.props;
    cartItems = removeItemsFromCart(cartItems, this.props.product);
    // if (cartItems.length > 0) {
    this.props.dispatch({
      type: "UPDATE_ITEM_LIST",
      payload: [...cartItems]
    });
    // } else {
    //   this.props.dispatch({
    //     type: "RESET_LIST"
    //   });
    // }

  };

  render() {
    return <button onClick={this.removeItem}>{this.props.children}</button>
  }
}

export default connect(store => ({ cartItems: store.cart.cartItems }))(RemoveButton);

function removeItemsFromCart(cartItems, product) {
  let items = cartItems.map(x => {
    if (x.id === product.id) {
      x.quantity -= 1;
    }
    return x;
  });
  items = items.filter(x => (x.id !== product.id) || (x.id === product.id && x.quantity > 0));
  return items;
}
import React from "react";
import { connect } from "react-redux";

class Cart extends React.Component {
  componentDidUpdate() {
    console.log(this.props)
  }

  render() {
    return <div>{this.props.cartItems.length}{this.props.total}</div>;
  }
}

export default connect(store => ({
  cartItems: store.cart.cartItems,
  total: store.cart.total
}))(Cart);

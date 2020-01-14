import React from "react";
import { connect } from "react-redux";
// import {} from '../services/products';

// listProducts();
class Cart extends React.Component {
  render() {
    return <div>EAEAEE</div>;
  }
}

export default connect(store => ({
  cartItems: store.cart.cartItems,
  total: store.cart.total
}))(Cart);

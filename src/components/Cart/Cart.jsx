import React from "react";
import { connect } from "react-redux";

class Cart extends React.Component {
  componentDidUpdate() {
    this.props.dispatch({ type: "CALCULATE_TOTAL" });
  }

  render() {
    return <div>
      {this.props.cartItems.map(item => (
        <div key={item.id}>
          <h2>Nome: {item.name}</h2>
          Quantidade: {item.quantity}
          Preço: {item.price}
          Código: {item.id}
        </div>)
      )}
      Total:{this.props.total}</div>;
  }
}

export default connect(store => ({
  cartItems: store.cart.cartItems,
  total: store.cart.total
}))(Cart);

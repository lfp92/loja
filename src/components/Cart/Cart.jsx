import React from "react";
import { connect } from "react-redux";
import AddButton from "../Buttons/AddButton";
import RemoveButton from "../Buttons/RemoveButton";

class Cart extends React.Component {
  componentDidUpdate() {
    let { cartItems } = this.props;
    this.props.dispatch({ type: "CALCULATE_TOTAL", payload: [...cartItems] });
  }


  render() {
    return <div>
      {this.props.cartItems.map(item => (
        <div key={item.id}>
          <h2>Nome: {item.name}</h2>
          Quantidade: {item.quantity}
          Preço: {item.price}
          Código: {item.id}
          <AddButton product={item}>+</AddButton>
          <RemoveButton product={item}>-</RemoveButton>
        </div>)
      )}
      Total:{this.props.total}</div>;
  }
}

export default connect(store => ({
  cartItems: store.cart.cartItems,
  total: store.cart.total
}))(Cart);

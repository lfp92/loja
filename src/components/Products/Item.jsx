import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Item extends React.Component {
  addItem = () => {
    let { cartItems } = this.props;
    cartItems.push({ ...this.props.product, quantity: 1 });
    this.props.dispatch({
      type: "ADD_ITEM",
      payload: [...cartItems]
    });
  };

  render() {
    return (
      <div>
        <input type="checkbox" value="on" />
        <Link to={`/produto/${this.props.product.id}`}>
          <h2>{this.props.product.name}</h2>
        </Link>
        <h3>Código: {this.props.product.id}</h3>
        <h4>R$ {this.props.product.price}</h4>
        <section>
          Descrição: {this.props.product.description.substr(0, 50)}...
        </section>
        <button onClick={this.addItem}>ADICIONAR AO CARRINHO</button>
      </div>
    );
  }
}

export default connect(store => ({ cartItems: store.cart.cartItems }))(Item);

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product
    };
  }

  addItem = () => {
    let cartItems = this.props.cartItems;
    cartItems.push(this.state.product);
    this.props.dispatch({
      type: "ADD_ITEM",
      payload: cartItems
    });
  };

  render() {
    return (
      <div>
        <input type="checkbox" value="on" />
        <Link to={`/produto/${this.state.product.id}`}>
          <h2>{this.state.product.name}</h2>
        </Link>
        <h3>Código: {this.state.product.id}</h3>
        <h4>R$ {this.state.product.price}</h4>
        <section>
          Descrição: {this.state.product.description.substr(0, 50)}...
        </section>
        <button onClick={this.addItem}>ADICIONAR AO CARRINHO</button>
      </div>
    );
  }
}

export default connect(store => ({ cartItems: store.cart.cartItems, dispatch: store.cart.dispatch }))(Item);

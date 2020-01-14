import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AddButton from "../Buttons/AddButton";

class Item extends React.Component {


  render() {
    return (
      <div>
        <Link to={`/produto/${this.props.product.id}`}>
          <h2>{this.props.product.name}</h2>
        </Link>
        <h3>Código: {this.props.product.id}</h3>
        <h4>R$ {this.props.product.price}</h4>
        <section>
          Descrição: {this.props.product.description.substr(0, 50)}...
        </section>
        <AddButton product={this.props.product}>Adicionar ao carrinho</AddButton>
      </div>
    );
  }
}

export default connect(store => ({ cartItems: store.cart.cartItems }))(Item);

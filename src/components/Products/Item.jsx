import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AddButton from "../Buttons/AddButton";
import styled from "styled-components";

class Item extends React.Component {


  render() {
    return (
      <Div>
        <Link to={`/produto/${this.props.product.id}`}>
          <H2Link>
            {this.props.product.name}
          </H2Link>
        </Link>
        <h3>Código: {this.props.product.id}</h3>
        <h4>R$ {this.props.product.price}</h4>
        <section>
          Descrição: {this.props.product.description.substr(0, 50)}...
        </section>
        <AddButton product={this.props.product}>Adicionar ao carrinho</AddButton>
      </Div>
    );
  }
}

export default connect(store => ({ cartItems: store.cart.cartItems }))(Item);

const H2Link = styled.h2`
  background-color: blue;
  ${'' /* width: 100%; */}
  color: white;
  font-size: 1.2rem;
  padding: 10px;
  margin-top: 0px;
`
const Div = styled.div`
  background-color: #222222;
  border: 1px solid black;
  border-radius: 2px;
  margin: 10px;
` 
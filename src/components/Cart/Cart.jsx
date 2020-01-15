import React from "react";
import { connect } from "react-redux";
import AddButton from "../Buttons/AddButton";
import RemoveButton from "../Buttons/RemoveButton";
import styled from 'styled-components';

class Cart extends React.Component {
  componentDidUpdate() {
    let { cartItems } = this.props;
    let total = cartItems.length > 0 ? cartItems.map(x => x.quantity * x.price).reduce((x, y) => x + y).toFixed(2) : 0;
    this.props.dispatch({ type: "SET_TOTAL", payload: total });
  }


  render() {
    return (
      <Div>
        <DivQtdeItems>Carrinho: {this.props.cartItems.length}</DivQtdeItems>
        <DivCarItems>
          {this.props.cartItems.map(item => (
            <div key={item.id}>
              <h2>Nome: {item.name}</h2>

              Quantidade: {item.quantity}
              Preço: {item.price}
              Código: {item.id}
              <AddButton product={item}>+</AddButton>
              <RemoveButton product={item}>-</RemoveButton>
            </div>))
          }
        </DivCarItems>
        <DivTotal>
          Total: R$ {this.props.total}
        </DivTotal>
      </Div>);
  }
}

export default connect(store => ({
  cartItems: store.cart.cartItems,
  total: store.cart.total
}))(Cart);


const DivQtdeItems = styled.div`
  @media (min-width: 728px) {
    display: none;  
  }
  margin-left: 10px;
  width: fit-content;
  `
const DivTotal = styled.div`
    align-items: center;
    left: 0px;
    margin-right: 10px;
    width: fit-content;
  `

const Div = styled.div`
  align-items: center;
  font-size: 1.2rem;
  display: flex;
  height: 100%;
  justify-content:space-between;
` 

const DivCarItems = styled.div`
  @media (max-width: 728px) {
    display: none;
  }
`
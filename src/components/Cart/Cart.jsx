import React from "react";
import { connect } from "react-redux";
import AddButton from "../Buttons/AddButton";
import RemoveButton from "../Buttons/RemoveButton";
import styled from 'styled-components';
import { Link } from "react-router-dom";

class Cart extends React.Component {
  componentDidUpdate() {
    let { cartItems } = this.props;
    let total = cartItems.length > 0 ? cartItems.map(x => x.quantity * x.price).reduce((x, y) => x + y).toFixed(2) : 0;
    this.props.dispatch({ type: "SET_TOTAL", payload: total });
  }


  render() {
    return (
      <Div>
        <DivAux>
          <Link to={"/"}><Button>{`<`}</Button></Link>
          <DivQtdeItems>Itens: {this.props.cartItems.length > 0 ? this.props.cartItems.map(x => x.quantity).reduce((x, y) => x + y) : 0}</DivQtdeItems>
          <DivTotal>R$ {this.props.total}</DivTotal>
          <Button onClick={() => this.props.dispatch({ type: this.props.expanded ? "COLLAPSE_CART" : "EXPAND_CART" })}><img width="20px" height="20px" src="https://image.flaticon.com/icons/png/512/126/126510.png" /></Button>
          {/* <Button onClick={() => this.props.dispatch({ type: "COLLAPSE_CART" })}>^</Button> */}
        </DivAux>
        {this.props.expanded ?
          this.props.cartItems.map(item => (
            <DivCarItems>
              <div key={item.id}>
                <h4>{item.name}</h4>
                <Section>Quantidade: {item.quantity}</Section>
                <Section> R$ {item.price} (por unidade)</Section>
                <Section>Código: {item.id}</Section>
                <Section>
                  <AddButton product={item}>+</AddButton>
                  <RemoveButton product={item}>-</RemoveButton>
                </Section>
              </div>
            </DivCarItems>
          ))
          : false}

      </Div>);
  }
}

export default connect(store => ({
  cartItems: store.cart.cartItems,
  total: store.cart.total,
  expanded: store.cart.expanded
}))(Cart);


const DivQtdeItems = styled.div`
    margin-right: 10px;
    margin-left: 10px;
    width: fit-content;
  `
const DivTotal = styled.div`
    margin-left: 10px;
    align-items: ${props => props.expanded ? 'center' : 'flex-start'};
    left: 0px;
    margin-right: 10px;
    width: fit-content;
  `

const Div = connect(store => ({ expanded: store.cart.expanded }))(styled.div`
    align-items: ${ props => props.expanded ? 'flex-start' : 'center'};
    margin: ${ props => props.expanded ? '1vh' : '0vh'};
    font-size: 1.2rem;
    @media (max-width: 768px) {
      font-size: 1.05rem;
    }
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: ${ props => props.expanded ? 'flex-start' : 'space-between'};
`)

const DivCarItems = connect(store => ({ expanded: store.cart.expanded }))(styled.div`
  background-color: #fefefe;
  padding:  0px 10px 10px 10px;
  color: #222222;
  border: 1px solid #222222;
`)

const DivAux = styled.div`
    margin: 10px;
    display: flex;
  `

const Button = styled.button`
    border: 1px solid #222222;
    padding: 5px 10px 5px 10px;
  `

const Section = styled.section`
  font-size: 1rem;
  margin: 5px;
` 
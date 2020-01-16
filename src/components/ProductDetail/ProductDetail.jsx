import React from "react";
import { connect } from "react-redux";
import { getProduct } from "../../services/products";
import styled from "styled-components"

class ProductDetail extends React.Component {
  componentDidMount() {
    let { id } = this.props.match.params;
    getProduct(id)
      .then(result => {
        let { item } = result;
        if (item.length === 1) {
          this.props.dispatch({ type: "SET_DETAIL", payload: item[0] });
        } else {
          throw Error("Produto não encontrado");
        }
      })
      .catch(error => {
        console.log(error);
        this.props.dispatch({ type: "SET_ERROR_DETAIL", payload: true });
      });
  }

  render() {
    return (
      this.props.error ? (
        <Div>
          <h3>Produto não encontrado</h3>
        </Div>
      ) : (
          <Div>
            <h3>{this.props.product.name}</h3>
            <h4>Código: {this.props.product.id}</h4>
            <h4>R$ {this.props.product.price}</h4>
            <h5>Descrição:</h5>
            <Section>{this.props.product.description}</Section>
          </Div>
        )
    );
  }
}

export default connect(store => ({
  product: store.productDetail.product,
  error: store.productDetail.error,
  cart: store.cart
}))(ProductDetail);

const Div = styled.div`
  font-size: 1rem;
  padding: 0px 10px 0px 10px;
  overflow: hidden;
  height: 90vh;
`
const Section = styled.section`
  margin: 5px 0px 5px 0px;
  font-size: .85rem;
  text-align: justify;
`
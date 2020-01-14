import React from "react";
import { connect } from "react-redux";
import { getProduct } from "../../services/products";

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
    return <div>
      {this.props.error ? (
        <div>
          <h1>Produto não encontrado</h1>
        </div>
      ) : (
          <main>
            <h1>Nome: {this.props.product.name}</h1>
            <h2>Código: {this.props.product.id}</h2>
            <section>Preço: {this.props.product.price}</section>
            <section>Descrição: {this.props.product.description}</section>
          </main>
        )
      }
    </div>
  }
}

export default connect(store => ({
  product: store.productDetail.product,
  error: store.productDetail.error,
  cart: store.cart
}))(ProductDetail);

import React from "react";
import { listProducts } from "../../services/products";
import { connect } from "react-redux";
import { createView, filterProducts } from "./Item";

class Products extends React.Component {
  componentDidMount() {
    console.log(this.props);
    listProducts()
      .then(results => {
        let { data } = results;
        this.props.dispatch({ type: "SET_DATA", payload: data });
        let items = createView(data);
        this.props.dispatch({ type: "LIST_PRODUCTS", payload: items });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        Filtrar resultados
        <input
          type="text"
          placeholder="Digite o código ou nome do produto"
          onChange={e =>
            this.props.dispatch({
              type: "LIST_PRODUCTS",
              payload: filterProducts(e.target.value, this.props.data)
            })
          }
        ></input>
        <section>{this.props.list}</section>
      </div>
    );
  }
}

export default connect(store => {
  return {
    list: store.products.list,
    data: store.products.data,
    cart: store.cart
  };
})(Products);

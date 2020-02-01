import React from "react";
import { listProducts } from "../../services/products";
import { connect } from "react-redux";
import Item from "./Item";

class Products extends React.Component {  

  componentDidMount() {
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


function createView(data) {
  return data.map(item => <Item key={item.id} product={item} />);
}

export function filterProducts(value, data) {
  let items = data.filter(item => {
    if (item.id.toString() === value || item.name.toUpperCase().split(value.toUpperCase()).length > 1)
      return item;
    return null;
  });

  if (items.length === 0 && value.trim() === "") return createView(data);
  return createView(items);
}


export default connect(store => {
  return {
    list: store.products.list,
    data: store.products.data,
    cart: store.cart
  }
})(Products);

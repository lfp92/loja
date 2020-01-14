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

  handleClick = () => {
    this.props.dispatch({
      type: "ADD_ITEM",
      payload: this.state.product
    });
    console.log(this.props)
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
        <button onClick={this.handleClick}>ADICIONAR AO CARRINHO</button>
      </div>
    );
  }
}

export function createView(data) {
  return data.map(item => <Item key={item.id} product={item} />);
}

export function filterProducts(value, data) {
  let items = data.filter(item => {
    if (
      item.id.toString() === value ||
      item.name.toUpperCase().split(value.toUpperCase()).length > 1
    )
      return item;
    return null;
  });

  if (items.length === 0 && value.trim() === "") return createView(data);
  return createView(items);
}

Item = connect(store => ({ dispatch: store.cart.dispatch }))(Item);

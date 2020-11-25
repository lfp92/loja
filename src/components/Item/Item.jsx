import React from 'react';
import { Link } from 'react-router-dom';
//import styled from 'styled-components';

function Item({ product }) {
  function addProdutoNoCarrinho(produto) {
    console.log(produto);
  }

  return (
    <div>
      <Link to={`/produto/${product.id}`}>
        <h2>{product.name}</h2>
      </Link>
      <div>
        <h3>Código: {product.id}</h3>
        <h4>R$ {product.price}</h4>
        <section>Descrição: {product.description.substr(0, 50)}...</section>
        <div>
          <button onClick={() => addProdutoNoCarrinho(product)}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;

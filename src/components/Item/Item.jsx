import React from 'react';
import { Link } from 'react-router-dom';
//import styled from 'styled-components';

function Item({ currentProduct }) {
  function addProdusctToCart(produto) {
    console.log(produto);
  }

  return (
    <div>
      <Link to={`/produto/${currentProduct.id}`}>
        <h2>{currentProduct.name}</h2>
      </Link>
      <div>
        <h3>Código: {currentProduct.id}</h3>
        <h4>R$ {currentProduct.price}</h4>
        <section>
          Descrição: {currentProduct.description.substr(0, 50)}...
        </section>
        <div>
          <button onClick={() => addProdusctToCart(currentProduct)}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;

import React from 'react';
import { Link } from 'react-router-dom';
import AddButton from '../Buttons/AddButton';
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

/*
const H2Link = styled.h2`
  background-color: #fe7c02;
  color: white;
  font-size: 1.2rem;
  margin-top: 0px;
  padding: 10px;
`;
const Div = styled.div`
  background-color: #fefefe;
  border: 1px solid black;
  border-radius: 2px;
  margin: 10px;
`;
const DivAux = styled.div`
  color: #222222;
  padding: 0px 10px 10px 10px;
`;
const DivCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
*/

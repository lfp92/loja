import React from 'react';
import { Link } from 'react-router-dom';
import AddButton from '../Buttons/AddButton';
import styled from 'styled-components';

function Item(props) {
  return (
    <Div>
      <Link to={`/produto/${props.product.id}`}>
        <H2Link>{props.product.name}</H2Link>
      </Link>
      <DivAux>
        <h3>Código: {props.product.id}</h3>
        <h4>R$ {props.product.price}</h4>
        <section>
          Descrição: {props.product.description.substr(0, 50)}...
        </section>
        <DivCenter>
          <AddButton product={props.product}>Adicionar ao carrinho</AddButton>
        </DivCenter>
      </DivAux>
    </Div>
  );
}

export default Item;

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

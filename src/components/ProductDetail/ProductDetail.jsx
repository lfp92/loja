import React from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../../services/products';
import styled from 'styled-components';

function ProductDetail(props) {
  React.useEffect(() => {
    let { id } = props.match.params;
    getProduct(id)
      .then((result) => {
        let { item } = result;
        if (item.length === 1) {
          props.dispatch({ type: 'SET_DETAIL', payload: item[0] });
        } else {
          throw Error('Produto não encontrado');
        }
      })
      .catch((error) => {
        props.dispatch({ type: 'SET_ERROR_DETAIL', payload: true });
      });
  }, []);

  return props.error ? (
    <Div>
      <h3>Produto não encontrado</h3>
    </Div>
  ) : (
    <Div>
      <h3>{props.product.name}</h3>
      <h4>Código: {props.product.id}</h4>
      <h4>R$ {props.product.price}</h4>
      <h5>Descrição:</h5>
      <Section>{props.product.description}</Section>
    </Div>
  );
}

export default ProductDetail;

const Div = styled.div`
  font-size: 1rem;
  height: 90vh;
  overflow: hidden;
  padding: 0px 10px 0px 10px;
`;
const Section = styled.section`
  font-size: 0.85rem;
  margin: 5px 0px 5px 0px;
  text-align: justify;
`;

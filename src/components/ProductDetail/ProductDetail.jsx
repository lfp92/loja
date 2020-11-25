import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../services/ProductService';
import styled from 'styled-components';
import Cart from '../Cart/Cart';

function ProductDetail(props) {
  const product = useSelector((store) => store.productDetail.product);
  const dispatch = useDispatch();

  React.useEffect(() => {
    let { id } = props.match.params;
    getProduct(id)
      .then((result) => {
        let item = result;
        if (item) {
          dispatch({ type: 'SET_DETAIL', payload: item });
        } else {
          throw Error('Produto não encontrado');
        }
      })
      .catch((error) => {
        dispatch({ type: 'SET_ERROR_DETAIL', payload: true });
      });
  }, [props.match.params, dispatch]);

  return props.error ? (
    <Div>
      <h3>Produto não encontrado</h3>
    </Div>
  ) : (
    <>
      <Cart />
      <Div>
        <h3>{product.name}</h3>
        <h4>Código: {product.id}</h4>
        <h4>R$ {product.price}</h4>
        <h5>Descrição:</h5>
        <Section>{product.description}</Section>
      </Div>
    </>
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

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../services/ProductService';
import Item from '../Item/Item';

function Products(props) {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);

  useEffect(() => {
    listProducts()
      .then((results) => {
        dispatch({ type: 'LIST_PRODUCTS', products: results });
      })
      .catch((error) => console.log(error));
  }, [products.data, dispatch]);

  function handleBatata(e) {
    console.log('handleBatata');
  }

  return (
    <div>
      Filtrar resultados
      <input
        type="text"
        placeholder="Digite o código ou nome do produto"
        onChange={(e) => handleBatata(e)}
      />
      <section id="listaProdutos">
        {products.map((item, index) => (
          <Item key={index} currentProduct={item} />
        ))}
      </section>
    </div>
  );
}

export default Products;

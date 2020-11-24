import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../services/products';
import Item from './Item';

function Products(props) {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  useEffect(() => {
    listProducts()
      .then((results) => {
        let data = results;
        dispatch({ type: 'SET_DATA', payload: data });
        dispatch({ type: 'LIST_PRODUCTS', payload: createView(data) });
      })
      .catch((error) => console.log(error));
  }, [products.data, dispatch]);

  return (
    <div>
      Filtrar resultados
      <input
        type="text"
        placeholder="Digite o código ou nome do produto"
        onChange={(e) =>
          dispatch({
            type: 'LIST_PRODUCTS',
            payload: filterProducts(e.target.value, props.data),
          })
        }
      ></input>
      <section id="listaProdutos">{products.list}</section>
    </div>
  );
}

function createView(data) {
  return data.map((item, index) => <Item key={index} product={item} />);
}

export function filterProducts(value, data) {
  let items = data.filter((item) => {
    if (
      item.id.toString() === value ||
      item.name.toUpperCase().split(value.toUpperCase()).length > 1
    )
      return item;
    return null;
  });

  if (items.length === 0 && value.trim() === '') return createView(data);
  return createView(items);
}

export default Products;

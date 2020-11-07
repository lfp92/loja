import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import ProductDetail from './ProductDetail';
import store from '../../store';

describe('ProductDetail component', () => {
  const match = {
    params: {
      id: 1,
    },
  };

  const produto = {
    id: '2',
    name:
      'Processador AMD Ryzen 5 1600, Cache 19MB, 3.2GHz (3.6GHz Max Turbo), AM4 - YD1600BBAFBOX',
    price: '764.59',
    description:
      'Com esse processador inovador e incrível você desfruta ao máximo o verdadeiro potencial do seu computador e desfruta da mais pura velocidade. Maximize o seu desempenho seja trabalhando, jogando, navegando ou assistindo o seu filme preferido, com esse processador você pode tudo!',
  };

  test('Componente deve ser criado', () => {
    const component = renderer.create(
      <Provider store={store}>
        <ProductDetail match={match} product={produto} />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});

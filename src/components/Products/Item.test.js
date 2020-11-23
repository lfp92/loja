import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Item from './Item';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';

describe('Item component', () => {
  test('Componente deve ser criado', () => {
    const produto = {
      id: '2',
      name:
        'Processador AMD Ryzen 5 1600, Cache 19MB, 3.2GHz (3.6GHz Max Turbo), AM4 - YD1600BBAFBOX',
      price: '764.59',
      description:
        'Com esse processador inovador e incrível você desfruta ao máximo o verdadeiro potencial do seu computador e desfruta da mais pura velocidade. Maximize o seu desempenho seja trabalhando, jogando, navegando ou assistindo o seu filme preferido, com esse processador você pode tudo!',
    };
    const component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Item product={produto} />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});

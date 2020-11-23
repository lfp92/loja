import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../store';

import Cart from './Cart';

describe('Cart component', () => {
  test('Componente Cart deve ser criado', () => {
    const componet = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </Provider>
    );
    expect(componet).toBeTruthy();
  });
});

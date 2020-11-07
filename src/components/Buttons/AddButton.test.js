import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../../store';

import AddButton from './AddButton';

describe('Componente AddButton', () => {
  test('Deve criar componente AddButton', () => {
    const component = renderer.create(
      <Provider store={store}>
        <AddButton />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});

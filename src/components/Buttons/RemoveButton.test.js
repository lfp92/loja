import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../../store';

import RemoveButton from './RemoveButton';

describe('Componente RemoveButton', () => {
  test('Deve criar componente RemoveButton', () => {
    const component = renderer.create(
      <Provider store={store}>
        <RemoveButton />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});

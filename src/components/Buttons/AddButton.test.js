import React from 'react';
import renderer from 'react-test-renderer';
import AddButton from './AddButton';

describe('Componente AddButton', () => {
  test('Deve criar componente AddButton', () => {
    const component = renderer.create(<AddButton />);
    expect(component).toBeTruthy();
  });
});

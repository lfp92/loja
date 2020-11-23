import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from './ButtonTemplate';

describe('Componente ButtonTemplate', () => {
  test('Deve criar componente ButtonTemplate', () => {
    const component = renderer.create(<Button />);
    expect(component).toBeTruthy();
  });
});

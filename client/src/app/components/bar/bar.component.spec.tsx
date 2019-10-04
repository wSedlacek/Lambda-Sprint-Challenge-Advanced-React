import React from 'react';
import { render } from '@testing-library/react';

import { Bar } from './bar.component';

const stub = () => {};

test('renders without errors', () => {
  const { baseElement } = render(<Bar enabled={false} onSwitch={stub} />);
  expect(baseElement).toBeTruthy();
});

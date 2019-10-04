import React from 'react';
import { render } from '@testing-library/react';
import { sleep } from 'setupTests';

import { PlayersPage } from './players.page';

test('renders without errors', () => {
  const { baseElement } = render(<PlayersPage />);
  expect(baseElement).toBeTruthy();
});

test('shows loading', () => {
  const { getByTestId } = render(<PlayersPage />);
  expect(getByTestId('loading')).toBeTruthy();
});

test('shows players from the United States', async () => {
  const { queryAllByText } = render(<PlayersPage />);
  await sleep(500);
  expect(queryAllByText('United States')[0]).toBeTruthy();
});

import React from 'react';
import { render } from '@testing-library/react';

import { Player } from '../../models/Player';
import { PlayerCard } from './player-card.component';

const dave: Player = {
  id: 0,
  name: 'Dave',
  country: 'USA',
  searches: 0,
};

test('renders without errors', () => {
  const { baseElement } = render(<PlayerCard player={dave} />);
  expect(baseElement).toBeTruthy();
});

test("shows player's name", () => {
  const { getByText } = render(<PlayerCard player={dave} />);
  expect(getByText(dave.name)).toBeInTheDocument();
});

test("shows player's country", () => {
  const { getByText } = render(<PlayerCard player={dave} />);
  expect(getByText(dave.country)).toBeInTheDocument();
});

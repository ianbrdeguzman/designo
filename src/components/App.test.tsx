import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the h1 header', () => {
  render(<App />);

  const header = screen.getByRole('heading');

  expect(header.textContent).toBe('Designo');
});

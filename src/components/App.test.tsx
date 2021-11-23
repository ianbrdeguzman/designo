import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders the <Header /> component', () => {
    render(<App />);
    const header = screen.getByRole('navigation');

    expect(header).toBeInTheDocument();
  });
});

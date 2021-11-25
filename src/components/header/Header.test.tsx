import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  it('renders the Designo Logo', () => {
    render(<Header />);
    const logo = screen.getByRole('img', {
      name: /designo logo/i
    });

    expect(logo).toBeInTheDocument();
  });

  it('renders the Menu button', () => {
    render(<Header />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('opens the menu when button is clicked', async () => {
    render(<Header />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const list = await screen.findByRole('list');

    expect(list).toHaveClass('menu__list menu__list--open');
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu';

describe('<Menu />', () => {
  const isMenuOpen = true;
  it('renders the menu items', () => {
    render(<Menu isMenuOpen={isMenuOpen} />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    const links = listItems.map((item) => item.textContent);
    expect(links).toEqual(['Our Company', 'Locations', 'Contact']);
  });
});

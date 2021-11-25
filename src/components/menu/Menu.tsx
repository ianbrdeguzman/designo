import React from 'react';
import classnames from 'classnames';

import './Menu.scss';

interface MenuProps {
  isMenuOpen: boolean;
  className?: string;
}

const Menu = ({ isMenuOpen, className }: MenuProps): JSX.Element => {
  return (
    <ul
      className={classnames('menu__list', className, {
        'menu__list--open': isMenuOpen
      })}
    >
      <li className="menu__list-item">Our Company</li>
      <li className="menu__list-item">Locations</li>
      <li className="menu__list-item">Contact</li>
    </ul>
  );
};

export default Menu;

Menu.defaultProps = {
  className: ''
};

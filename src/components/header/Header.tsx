import React, { useState } from 'react';
import classnames from 'classnames';
import Logo from '../../assets/shared/desktop/logo-dark.png';
import { ReactComponent as HambugerMenu } from '../../assets/shared/mobile/icon-hamburger.svg';
import { ReactComponent as CloseMenu } from '../../assets/shared/mobile/icon-close.svg';

import './Header.scss';

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="header__nav">
        <img src={Logo} alt="Designo Logo" className="header__logo" />
        <button
          type="button"
          className="header__menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseMenu /> : <HambugerMenu />}
        </button>
        <ul
          className={classnames('header__list', {
            'header__list--open': isMenuOpen
          })}
        >
          <li className="header__list-item">Our Company</li>
          <li className="header__list-item">Locations</li>
          <li className="header__list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

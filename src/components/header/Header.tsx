import React, { useState } from 'react';
import Menu from '../menu/Menu';
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
        <Menu isMenuOpen={isMenuOpen} />
      </nav>
    </header>
  );
};

export default Header;

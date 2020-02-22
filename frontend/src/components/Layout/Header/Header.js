import React, { useState } from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
} from 'reactstrap';
import './Header.scss';
import Logo from '../../../assets/images/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleLogout() {
    localStorage.removeItem('@token');
    localStorage.removeItem('@me');
    window.location.href = '/sign';
  }

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="Header">

      <div className="left">
        <span>Shortly</span>
      </div>
      <div className="right">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;

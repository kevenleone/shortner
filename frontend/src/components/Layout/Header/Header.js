import React, { useState } from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
} from 'reactstrap';
import './Header.scss';
import Logo from '../../../assets/images/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="Header">
      <Navbar color="light" light expand="md">
        <div className="brandArea">
          <NavbarBrand href="/#/">
            <img alt="logo shortly" src={Logo} />
          </NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="navcontent">
          <Nav>
            <NavItem>Features</NavItem>
          </Nav>
          <Nav className="mr-auto" navbar />
          <Nav>
            <NavItem>
              Logout
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

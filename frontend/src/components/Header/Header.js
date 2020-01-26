import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './Header.scss';
import Logo from '../../assets/images/logo.svg'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="HeaderComponent">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/#/">
          <img src={Logo} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className='navcontent'>
          <Nav>
            <NavItem>Features</NavItem>
          </Nav>
          <Nav>
            <NavItem>Pricing</NavItem>
          </Nav>
          <Nav>
            <NavItem>Resources</NavItem>
          </Nav>
          <Nav className="mr-auto" navbar />
          <Nav>
            <NavItem>
              SignIn
            </NavItem>
          </Nav>
          <Nav>
            <NavItem>
              SignIn
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

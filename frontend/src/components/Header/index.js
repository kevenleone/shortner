import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="HeaderComponent">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/#/">Shortner</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar />
          <p className="user_name">
            <span className="name">Welcome</span> <br />
            </p>
          <img alt="user" className="user_avatar" src='https://ubisoft-avatars.akamaized.net/39f13774-114f-40ba-be02-845891b6c944/default_256_256.png' />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

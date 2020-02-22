import React from 'react';
import { NavLink } from 'reactstrap';
import './Header.scss';

const Header = () => {
  function handleLogout() {
    localStorage.removeItem('@token');
    localStorage.removeItem('@me');
    window.location.href = '/sign';
  }

  return (
    <div className="Header">

      <div className="left">
        <span>Shortly</span>
      </div>
      <div className="right">
        <div className="pull-right">
          <NavLink onClick={handleLogout}>Logout</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;

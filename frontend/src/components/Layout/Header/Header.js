import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'reactstrap';
import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => {
    dispatch({ type: 'SIGNOUT_SAGA' });
  });

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
